export interface Comment {
    body: string,
    email: string,
    id: string,
    name : string,
    postId: string,
}

export interface Comments {
    comments : Comment[]
}