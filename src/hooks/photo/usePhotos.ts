// src/hooks/usePosts.ts
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { fetchPhotos } from "@/services/apiPhoto";
import { fetchPosts } from "@/services/apiPosts";
import { PhotoPagination } from "@/types/photos";
import { useEffect } from "react";

export const usePhotos = () => {
    const searchParams = useSearchParams();
    const catId = parseInt(searchParams.get("catId") || "1", 10);
    const currentPage = parseInt(searchParams.get("page") || "1", 10);
    const orderBy = searchParams.get("orderBy") || "created_at desc";

    const queryClient = useQueryClient();

    const { data, error, isLoading } = useQuery<PhotoPagination, Error>({
        queryKey: ["photos", catId, currentPage, orderBy],
        queryFn: () => fetchPhotos({ catId, page: currentPage, orderBy }),
        staleTime: 1000 * 60 * 5, // cache for 5 minutes
        initialData: () => {
            return queryClient.getQueryData([
                "photos",
                catId,
                currentPage,
                orderBy,
            ]);
        },
    });

    // prefetch data for next and previous pages
    useEffect(() => {
        if (data) {
            const { last_page } = data;

            if (currentPage < last_page) {
                queryClient.prefetchQuery({
                    queryKey: ["photos", catId, currentPage + 1, orderBy],
                    queryFn: () =>
                        fetchPosts({ catId, page: currentPage + 1, orderBy }),
                });
            }

            if (currentPage > 1) {
                queryClient.prefetchQuery({
                    queryKey: ["photos", catId, currentPage - 1, orderBy],
                    queryFn: () =>
                        fetchPosts({ catId, page: currentPage - 1, orderBy }),
                });
            }
        }
    }, [data, currentPage, catId, orderBy, queryClient]);

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("catId", catId.toString());
        params.set("page", page.toString());
        if (orderBy) {
            params.set("orderBy", orderBy);
        }
        history.pushState(null, "", `?${params.toString()}`);
        window.dispatchEvent(new Event("popstate"));
    };

    return { posts: data, loading: isLoading, error, goToPage, currentPage };
};
