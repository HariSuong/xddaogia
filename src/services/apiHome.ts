import { apiFetchData } from "@/lib/apiUtils";
import { HomeData } from "@/types/home";

export const fetchHome = async (): Promise<HomeData> => {
    const url = `https://cdn.xddaogia.vn/public/api/home`;
    return apiFetchData<HomeData>(url);
};

// export const fetchHomeTuoiXd = async (): Promise<HomeData> => {
//     const url = `https://cdn.xddaogia.vn/public/api/home`;
//     return apiFetchData<HomeData>(url);
// };

// export const fetchPosts = async ({
//   catId,
//   page,
//   orderBy
// }: {
//   catId: number
//   page: number
//   orderBy?: string
// }): Promise<PostPagination> => {
//   const url = `https://cdn.xddaogia.vn/public/api/posts/${catId}?page=${page}${
//     orderBy ? `&orderby=${orderBy}` : ''
//   }`
//   return apiFetchData<PostPagination>(url)
// }
