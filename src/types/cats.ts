import { Post } from '@/types/posts'

export interface CategoryPost {
  id: number
  name: string
  thumb: string
  icon: string
  display_type: number
  inside: number
  posts: Post[]
}
