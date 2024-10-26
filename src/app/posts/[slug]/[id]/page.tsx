import PostDetail from '@/components/post/post-detail'
import React from 'react'

const PostPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  return <PostDetail id={id} />
}

export default PostPage
