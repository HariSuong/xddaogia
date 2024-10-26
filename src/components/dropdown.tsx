"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { slugify } from "@/lib/utils";
import { fetchPhotos } from "@/services/apiPhoto";
import { fetchPosts } from "@/services/apiPosts";
import { HeaderChild } from "@/types/settings";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

const Dropdown: React.FC<{
    childMenu: HeaderChild[];
    parentName: string;
    type: number;
}> = ({ childMenu, parentName, type }) => {
    const [open, setOpen] = useState(false);

    const queryClient = useQueryClient();

    // Hàm prefetch dữ liệu cho danh mục cụ thể
    const prefetchPhotos = (catId: number) => {
        queryClient.prefetchQuery({
            queryKey: ["photos", catId],
            queryFn: () =>
                fetchPhotos({ catId, page: 1, orderBy: "created_at desc" }),
        });
    };

    // Hàm prefetch cho posts
    const prefetchPosts = (catId: number) => {
        queryClient.prefetchQuery({
            queryKey: ["posts", catId],
            queryFn: () =>
                fetchPosts({ catId, page: 1, orderBy: "created_at desc" }),
        });
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            >
                {parentName}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onClick={() => setOpen(false)} // Đóng menu khi click vào một item
            >
                {childMenu.map((child) => (
                    <DropdownMenuItem
                        key={child.id}
                        onMouseEnter={() => {
                            if (type === 2) {
                                prefetchPosts(child.id); // Prefetch posts khi type là 2
                            } else {
                                prefetchPhotos(child.id); // Prefetch photos nếu không phải type 2
                            }
                        }}
                    >
                        <Link
                            className="py-2 md:py-4 px-2 uppercase md:text-base text-sm"
                            href={
                                type === 2
                                    ? `/posts/${slugify(child.name)}?catId=${
                                          child.id
                                      }&page=1`
                                    : `/photos/${slugify(child.name)}?catId=${
                                          child.id
                                      }&page=1`
                            }
                            onClick={() => setOpen(false)} // Đóng menu khi click vào Link
                        >
                            {child.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
                {/* <DropdownMenuSeparator /> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Dropdown;
