
export type PostItem = {
    title: string,
    bodyText: string,
    author: string,
    likes: number,
    id: number,
    comments: Comment[],
}

export type Comment = {
    author: string,
    text: string,
}