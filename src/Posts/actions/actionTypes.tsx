import { PostItem } from "../../Types";

export const PostsActionTypes = {
    SAVE_POSTS: "SAVE_POSTS",
    ADD_LIKES: "ADD_LIKES",
    REMOVE_LIKES: "REMOVE_LIKES",
    UPDATE_POST: "UPDATE_POST",
};

export const savePosts = (posts: PostItem[]) => {
    return {
        type: PostsActionTypes.SAVE_POSTS,
        payload: { posts },
    };
};

export const addLikes = (id: number) => {
    return {
        type: PostsActionTypes.ADD_LIKES,
        payload: { id },
    };
};

export const removeLikes = (id: number) => {
    return {
        type: PostsActionTypes.REMOVE_LIKES,
        payload: { id },
    };
};

export const addComment = (item: PostItem) => {
    return {
        type: PostsActionTypes.UPDATE_POST,
        payload: { item },
    };
};


