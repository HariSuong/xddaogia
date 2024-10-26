import React from "react";
import Link from "next/link";
import { PostListProps } from "@/types/posts";
import Image from "next/image";
import { slugify } from "@/lib/utils";

const PopularPosts: React.FC<PostListProps> = ({ posts }) => {
    return (
        <aside className="p-4 bg-white shadow-md rounded-md ">
            <h2 className="text-xl font-bold mb-4">BÀI VIẾT XEM NHIỀU</h2>
            <div className="space-y-4">
                {posts.map((post) => (
                    <Link
                        href={`/posts/${slugify(post.title)}/${post.id}`}
                        className="flex space-x-4 hover:-translate-y-2 transition-all hover:text-[#ec8524]"
                        key={post.id}
                    >
                        {/* <div className="w-20 h-20 overflow-hidden rounded"> */}
                        <Image
                            width={80} // Đảm bảo chiều rộng phù hợp với thiết kế
                            height={80} // Đảm bảo chiều cao phù hợp với thiết kế
                            src={post.thumb}
                            alt={post.title}
                            className="w-20 h-20 rounded object-cover aspect-square"
                        />
                        {/* </div> */}
                        <h3 className="h-[4.5rem] text-ellipsis line-clamp-3">
                            {post.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default PopularPosts;
