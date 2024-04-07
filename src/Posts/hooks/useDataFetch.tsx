import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { PostItem } from '../../Types';

export const useDataFetch = () => {
    const [data, setData] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 10; // Number of items to load per page

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch data from local JSON file
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await require('../../data.json');
            if (!response) {
                setError("bad resource");
                return;
            }
            const jsonData = response;
            const length = jsonData?.length;
            const startIndex = (page - 1) * pageSize;

            // if (startIndex + pageSize > length) return null;

            const newData = jsonData?.slice(startIndex, startIndex + pageSize);
            console.log({ page }, { newData })

            setData(prevData => [...prevData, ...newData]);
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

