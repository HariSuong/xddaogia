"use client";

import { fetchArticleDetail } from "@/services/apiArticle";
import { ArticleDetail } from "@/types/article";
import { useQuery } from "@tanstack/react-query";

export const useArticle = (articleId: number) => {
    return useQuery<ArticleDetail, Error>({
        queryKey: ["article", articleId],
        queryFn: () => fetchArticleDetail(articleId),
    });
};
