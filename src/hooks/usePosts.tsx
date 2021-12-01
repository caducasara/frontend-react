import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import api from '../services/api'

interface Posts {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

interface PostsProviderProps {
  children: ReactNode;
}

interface PostsConstextData {
  posts: Posts[];
  page: number;
  totalPages: number;
  getPage: (number: number) => void;
}

export const PostsContext = createContext<PostsConstextData>(
  {} as PostsConstextData
);

export function PostsProvider({ children }: PostsProviderProps) {

  const [posts, setPosts] = useState<Posts[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);


  useEffect(() => {
    api.get(`posts?_format=json&access-token=${process.env.TOKEN_ACCESS_GOREST}&page=${page <= 0 ? 1 : page}`)
      .then(response => {
        setPosts(response.data.data)
        setTotalPages(response.data.meta.pagination.pages);
      })
  }, [page]);

  function getPage(page: number) {
    setPage(page);
  }


  return (
    <PostsContext.Provider value={{ posts, page, getPage, totalPages }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}