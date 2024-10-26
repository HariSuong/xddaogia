import { slugify } from "@/lib/utils";
import { PostItemProps } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostItem: React.FC<PostItemProps> = (props) => {
    const { id, desc, thumb, title } = props;
    return (
        <Link href={`/posts/${slugify(title)}/${id}`}>
            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                <Image
                    width={320}
                    height={240}
                    src={`${thumb}`}
                    alt={title}
                    className="rounded w-80 h-60 object-cover"

                    // priority
                    // layout="responsive"
                />
                {/* <img src={thumb} alt={title} className='w-full h-48 object-cover' /> */}
                <div className="py-4">
                    <h3 className="text-lg font-semibold mb-4 h-14 text-ellipsis line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-base h-[4.5rem] text-ellipsis line-clamp-3">
                        {desc}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PostItem;
