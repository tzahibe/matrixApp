import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Comment, PostItem } from "../../Types";
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, addLikes, removeLikes } from '../actions/actionTypes';


type PostItemComponentProps = {
    item: PostItem;
};


const PostItemComponent: React.FC<PostItemComponentProps> = ({ item }) => {
    const [newComment, setNewComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state?.PostsReducer?.posts);
    console.log({ posts });

    const handleLikePress = (id: number) => {
        console.log('Like button clicked');
        //redux
        setIsLiked(!isLiked);

        if (isLiked) {
            dispatch(removeLikes(id));
        }
        else {
            dispatch(addLikes(id));

        }
    };


    const handleCommentSubmit = (item: PostItem) => {
        if (newComment == "" || newComment == null) return;
        console.log('Comment submitted:', newComment);
        const newItem = { ...item } as PostItem;
        const comment = { author: "tzahi_b", text: newComment } as Comment
        newItem.comments = [...item.comments, comment];
        //redux
        dispatch(addComment(newItem));
        setNewComment('');
    };

    const renderComments = () => {
        return item.comments.map((comment, index) => (
            <View style={styles.commentContainer} key={index}>
                <Text style={styles.commentAuthor}>{comment.author}</Text>
                <Text>{comment.text}</Text>
            </View>
        ));
    };

    return (
        <>
            <View style={styles.container} key={item.id}>
                <View style={styles.header}>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.body}>
                    <Text>{item.bodyText}</Text>
                </View>
                <TouchableOpacity onPress={() => handleLikePress(item.id)} style={styles.likeStyle}>
                    <Icon
                        name={isLiked ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#3b5998'
                        size={20}
                    />
                    <Text style={styles.likeText}>{item.likes} Likes</Text>
                </TouchableOpacity>
                <View style={styles.commentsContainer}>
                    <Text style={styles.commentsHeader}>Comments</Text>
                    {renderComments()}
                    {/* Input field for new comment */}
                    <View style={styles.commentInputContainer}>
                        <TextInput
                            style={styles.commentInput}
                            placeholder="Add a comment..."
                            value={newComment}
                            onChangeText={setNewComment}
                        />
                        <TouchableOpacity onPress={() => handleCommentSubmit(item)} style={styles.commentButton}>
                            <Text style={styles.commentButtonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    title: {
        color: '#666',
    },
    body: {
        marginBottom: 10,
    },
    likesText: {
        color: '#666',
        marginBottom: 5,
    },
    likeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    likeText: {
        marginLeft: 5,
        color: '#3b5998',
    },
    commentsContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
    },
    commentsHeader: {
        fontWeight: 'bold',
        marginBottom: 12,
    },
    commentContainer: {
        marginBottom: 5,
        backgroundColor: "#F0F2F5",
        borderRadius: 10,
        padding: 20,
    },
    commentAuthor: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    commentInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },
    commentButton: {
        backgroundColor: '#3b5998',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    commentButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PostItemComponent;