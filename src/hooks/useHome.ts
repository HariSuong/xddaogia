import { fetchHome } from '@/services/apiHome'
import { HomeData } from '@/types/home'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useHome = (): UseQueryResult<HomeData, Error> => {
  return useQuery<HomeData, Error>({
    queryKey: ['home'],
    queryFn: fetchHome
  })
}
