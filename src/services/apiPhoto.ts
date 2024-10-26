import { apiFetchData } from "@/lib/apiUtils";
import { PhotoPagination } from "@/types/photos";

export const fetchPhotos = async ({
    catId,
    page,
    orderBy,
}: {
    catId: number;
    page: number;
    orderBy?: string;
}): Promise<PhotoPagination> => {
    const url = `https://cdn.xddaogia.vn/public/api/photos/${catId}?page=${page}${
        orderBy ? `&orderby=${orderBy}` : ""
    }`;
    return apiFetchData<PhotoPagination>(url);
};
