import { fetchPostsCat } from '@/services/apiPosts'
import { CategoryPost } from '@/types/cats'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const usePostsCat = (): UseQueryResult<CategoryPost[], Error> => {
  return useQuery<CategoryPost[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPostsCat
  })
}
