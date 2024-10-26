import { apiFetchData } from "@/lib/apiUtils";
import { ArticleDetail } from "@/types/article";

export const fetchArticleDetail = (id: number): Promise<ArticleDetail> => {
    const url = `https://cdn.xddaogia.vn/public/api/articles/detail/${id}`;
    return apiFetchData<ArticleDetail>(url);
};
