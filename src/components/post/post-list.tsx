"use client";

import PostItem from "@/components/post/post-item";
import { SkeletonCard } from "@/components/skeleton-card";
import { slugify } from "@/lib/utils";
import { Post, PostItemProps, PostListProps } from "@/types/posts";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const PostList: React.FC<PostListProps> = ({ posts }) => {
    if (posts.length === 0)
        return (
            <div className="py-32 flex justify-center items-center">
                Hiện chưa có bài viết nào cho chuyên mục này
            </div>
        );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {posts.map((post: PostItemProps) => (
                <PostItem
                    key={post.id}
                    desc={post.desc}
                    id={post.id}
                    thumb={post.thumb}
                    title={post.title}
                />
            ))}
        </div>
    );
};

export default PostList;
