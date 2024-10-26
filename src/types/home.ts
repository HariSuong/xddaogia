import { CategoryPost } from '@/types/cats'
import { Post } from '@/types/posts'

// Interface for categories that contain posts

// Interface for feedbacks
export interface Feedback {
  avatar: string
  name: string
  content: string
}

// Interface for slides
export interface Slide {
  image: string
  link: string
  target: string
  title: string
  desc: string
}

// Interface for the Home data structure
export interface HomeData {
  posts: CategoryPost[]
  feedbacks: Feedback[]
  slides: Slide[]
}
