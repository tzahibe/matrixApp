import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDataFetch } from '../hooks/useDataFetch';
import { PostItem } from '../../Types';
import PostItemComponent from './postItemComponent';

type RenderItemProps = {
    item: PostItem;
};

function PostsFlat() {

    const { data, loading, fetchData } = useDataFetch();

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
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            keyExtractor={(item, index) => String(index)}

        />
    );
};

export default PostsFlat;