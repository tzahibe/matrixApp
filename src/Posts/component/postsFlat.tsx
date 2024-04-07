import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDataFetch } from '../hooks/useDataFetch';
import { PostItem } from '../../Types';
import PostItemComponent from './postItemComponent';
import { useSelector } from 'react-redux';

type RenderItemProps = {
    item: PostItem;
};

function PostsFlat() {
    const { loading, fetchData } = useDataFetch();
    const posts = useSelector(
        (state) => state.PostsReducer.posts
    );

    const renderFooter = () => {
        return loading ? (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        ) : null;
    };

    const renderItem = ({ item }: RenderItemProps) => {
        return (
            <PostItemComponent item={item} key={`${item.id}_post`} />
        );
    };


    return (
        <>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={fetchData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                keyExtractor={(item, index) => String(index)}

            />
        </>

    );
};

export default PostsFlat;