import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./posts";

export const useGetPosts= () => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });
};

export const useGetPost = (id:string)=>{
  return useQuery({
    queryKey:['post', id],
    queryFn: ()=> getPost(id)
  })
}