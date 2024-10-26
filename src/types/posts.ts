export interface Post {
  id: number
  title: string
  desc: string
  thumb: string
  count_view?: number
}

export interface PostPagination {
  current_page: number
  data: Post[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: { url: string; label: string; active: boolean }[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string
  to: number
  total: number
}

export interface PostItemProps {
  id: number
  title: string
  desc: string
  thumb: string
}

export interface PostListProps {
  posts: Post[]
}

export interface PostDetail {
  id: number
  title: string
  thumb: string
  desc: string
  hot: number
  video: string
  content: string
  keywords: string[]
  menus: {
    id: number
    name: string
    thumb: string
    desc: string | null
    content: string
    video: string
    type_thumb_video: string
  }
  count_view: number
  related: Post[]
  count_view_list: Post[]
}
