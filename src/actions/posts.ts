import { postType } from "@/types/global";

export const getPosts = async(page = 1, limit = 10): Promise<postType[]>=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    if (!res.ok) throw new Error("Failed to fetch posts");
    return await res.json();
}

export const getPost = async(id:string): Promise<postType>=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error("Failed to fetch posts");
    return await res.json();
}