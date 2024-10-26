"use client";
import Pagination from "@/components/pagination";
import PostList from "@/components/post/post-list";
import { SkeletonCard } from "@/components/skeleton-card";

import { usePosts } from "@/hooks/post/usePosts";
import { slugify } from "@/lib/utils";
import { useRouter } from "next/navigation";

import React from "react";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
    const { currentPage, error, goToPage, loading, posts } = usePosts();
    const router = useRouter();

    const { slug } = params;
    console.log("slug", slug);

    // Điều hướng ngay tại đây nếu chỉ có một bài viết
    if (posts && posts.data.length === 1) {
        const singlePost = posts.data[0];
        // router.push(`/posts/${singlePost.id}`);
        router.push(`/posts/${slugify(singlePost.title)}/${singlePost.id}`);
        return <SkeletonCard />; // Hiển thị trạng thái loading trong lúc điều hướng
    }

    if (loading) return <SkeletonCard />;
    if (error) return <div>Error fetching posts.</div>;

    if (!posts) return null; // Kiểm tra nếu posts là null

    const { data, links, last_page } = posts;
    console.log("post", posts);

    return (
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <PostList posts={data} />
            {posts.data.length > 9 && (
                <Pagination
                    pageInfo={{ current_page: currentPage, links, last_page }}
                    onPageChange={goToPage}
                />
            )}
        </div>
    );
};

export default CategoryPage;
