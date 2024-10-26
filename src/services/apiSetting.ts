import { apiFetchData } from '@/lib/apiUtils'
import { Setting } from '@/types/settings'

export const fetchSettings = async (): Promise<Setting> => {
  const url = `https://cdn.xddaogia.vn/public/api/setting`
  return apiFetchData<Setting>(url)
}
