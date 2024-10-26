import { fetchSettings } from '@/services/apiSetting'
import { Setting } from '@/types/settings'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export const useSetting = (): UseQueryResult<Setting, Error> => {
  return useQuery<Setting, Error>({
    queryKey: ['setting'],
    queryFn: fetchSettings
  })
}
