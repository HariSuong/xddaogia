"use client";

import PostSlider from "@/components/post/post-slider";
import Title from "@/components/title";
import { slugify } from "@/lib/utils";
import { CategoryPost } from "@/types/cats";
import React from "react";

const PostHome: React.FC<{ data: CategoryPost[] }> = ({ data }) => {
    const posts = data?.map((cat) => {
        if (cat.posts.length <= 1) return null;
        if (cat.id === 4) return null;

        return (
            <div key={cat.id}>
                <Title
                    title={cat.name}
                    // subtitle='best seller'
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
        <div className="py-4 md:py-12 lg:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 container">
            {posts}
        </div>
    );
};

export default PostHome;
