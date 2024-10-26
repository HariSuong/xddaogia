"use client";

import PostSlider from "@/components/post/post-slider";
import { SkeletonCard } from "@/components/skeleton-card";
import Title from "@/components/title";
import { usePostsCat } from "@/hooks/post/usePostsCat";
import { slugify } from "@/lib/utils";
import React from "react";

const PostCat = () => {
    const { data, isPending, error } = usePostsCat();
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error: {error.message}</div>;
    // console.log(data);

    const posts = data?.map((cat) => {
        if (cat.posts.length === 0) return null;
        return (
            <div key={cat.id}>
                <Title
                    title={cat.name}
                    subtitle="best seller"
                    to={`/posts/${slugify(cat.name)}?catId=${cat.id}&page=1`}
                />
                <div className="font-[sans-serif] ">
                    <div className="p-4 lg:max-w-7xl sm:max-w-full">
                        <PostSlider posts={cat.posts} />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="py-4 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
            {posts}
        </div>
    );
};

export default PostCat;
