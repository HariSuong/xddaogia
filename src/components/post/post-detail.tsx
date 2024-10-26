"use client";
import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumb-with-custom-separator";
import AuthorInfo from "@/components/post/author-info";
import PopularPosts from "@/components/post/popular-posts";
import PostList from "@/components/post/post-list";
import { SkeletonCard } from "@/components/skeleton-card";
import { usePost } from "@/hooks/post/usePost";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PostDetail = ({ id }: { id: string }) => {
    const { data: post, isPending, error } = usePost(Number(id));
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error fetching post.</div>;
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container mx-auto py-24">
            <BreadcrumbWithCustomSeparator
                parentLink={`/posts/${slugify(post?.menus.name!)}?catId=${
                    post?.menus.id
                }&page=1`}
                currentPage={post.title}
                parentPage={post?.menus.name}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 uppercase leading-10">
                        {post.title}
                    </h1>
                    {/* <img src={post.thumb} className='w-full my-4' /> */}

                    <Image
                        width={800}
                        height={627}
                        src={post.thumb}
                        alt={post.title}
                        className="rounded my-8 w-full"
                    />
                    <div
                        className="content-container"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <AuthorInfo />
                </div>
                <div>
                    {/* <h2 className='text-gray-900 text-2xl title-font font-medium mb-4'>
            Bài viết xem nhiều
          </h2> */}
                    <PopularPosts posts={post.count_view_list} />
                </div>
            </div>
            {post.related.length > 0 && (
                <>
                    <h2 className="text-gray-900 text-2xl title-font font-medium mb-4 md:mt-12 mt-10  uppercase">
                        Các tin liên quan
                    </h2>
                    <PostList posts={post.related} />
                </>
            )}
        </div>
    );
};

export default PostDetail;
