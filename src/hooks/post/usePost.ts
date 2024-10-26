// src/hooks/usePost.ts
import { useQuery } from '@tanstack/react-query'

import { fetchPostDetail } from '@/services/apiPosts'
import { PostDetail } from '@/types/posts'

export const usePost = (postId: number) => {
  console.log(postId)
  return useQuery<PostDetail, Error>({
    queryKey: ['post', postId],
    queryFn: () => fetchPostDetail(postId)
  })
}
