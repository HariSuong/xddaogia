// components/CategoriesDropdown.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategories } from "@/lib/fakeData";
import { useRouter } from "next/navigation";

const CategoriesDropdown = () => {
    const router = useRouter();
    const categories = getCategories();

    const handleCategoryClick = (slug: string) => {
        router.push(`/photos/${slug}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="py-2 md:text-base text-sm lg:py-6 px-4 hover:bg-[#cb6506] uppercase">
                NHÀ ĐẸP
                {/* <Button className="bg-blue-500 text-white"></Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border rounded shadow-md">
                {categories.map((category) => (
                    <DropdownMenuItem
                        key={category.id}
                        onClick={() => handleCategoryClick(category.slug)}
                        className="cursor-pointer hover:bg-gray-100 md:text-base text-sm uppercase py-2 md:py-4 px-2"
                    >
                        {category.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

        // <DropdownMenu>
        //   <DropdownMenuTrigger>{parentName}</DropdownMenuTrigger>
        //   <DropdownMenuContent>
        //     {childMenu.map(child => (
        //       <DropdownMenuItem key={child.id}>{child.name}</DropdownMenuItem>
        //     ))}
        //     {/* <DropdownMenuSeparator /> */}

        //     {/* <DropdownMenuItem>Billing</DropdownMenuItem>
        //     <DropdownMenuItem>Team</DropdownMenuItem>
        //     <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        //   </DropdownMenuContent>
        // </DropdownMenu>
    );
};

export default CategoriesDropdown;
