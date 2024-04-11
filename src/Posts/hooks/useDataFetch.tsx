import { useState, useEffect } from 'react';
import { PostItem } from '../../Types';
import { useDispatch, useSelector } from 'react-redux';
import { savePosts } from '../actions/actionTypes';


export const useDataFetch = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 10; // Number of items to load per load

    const fetchData = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await require('../../data.json');
            if (!response) {
                setError("bad resource");
                return;
            }
            const jsonData = response;
            const startIndex = (page - 1) * pageSize;

            const newData = jsonData?.slice(startIndex, startIndex + pageSize);
            if (newData.length == 0) {
                console.log("no more data to show");
                return;
            }
            setData(prevData => [...prevData, ...newData]);
            dispatch(savePosts(newData));
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError("failed return data");
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};

