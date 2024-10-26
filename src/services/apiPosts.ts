import { apiFetchData } from '@/lib/apiUtils'
import { CategoryPost } from '@/types/cats'
import { PostDetail, PostPagination } from '@/types/posts'

export const fetchPostsCat = async (): Promise<CategoryPost[]> => {
  const url = `https://cdn.xddaogia.vn/public/api/posts`
  return apiFetchData<CategoryPost[]>(url)
}

export const fetchPosts = async ({
  catId,
  page,
  orderBy
}: {
  catId: number
  page: number
  orderBy?: string
}): Promise<PostPagination> => {
  const url = `https://cdn.xddaogia.vn/public/api/posts/${catId}?page=${page}${
    orderBy ? `&orderby=${orderBy}` : ''
  }`
  return apiFetchData<PostPagination>(url)
}

export const fetchPostDetail = (id: number): Promise<PostDetail> => {
  const url = `https://cdn.xddaogia.vn/public/api/posts/detail/${id}`
  return apiFetchData<PostDetail>(url)
}

// Danh sách bài viết nhiều lượt xem
