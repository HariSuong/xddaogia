import { SkeletonCard } from "@/components/skeleton-card";
import { useSetting } from "@/hooks/useSetting";
import { slugify } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
    FaFileSignature,
    FaBuilding,
    FaCity,
    FaScrewdriverWrench,
    FaVault,
} from "react-icons/fa6";

const iconMap = {
    FaFileSignature: FaFileSignature,
    FaBuilding: FaBuilding,
    FaCity: FaCity,
    FaScrewdriverWrench: FaScrewdriverWrench,
    FaVault: FaVault,
};

const PriceModule = () => {
    const { data: cat, isPending, error } = useSetting();
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error: {error.message}</div>;

    const [prices] = cat.headers.filter((header) => header.id === 4);

    // console.log("price", prices.children);

    return (
        <section className="container bg-white lg:py-12 py-6">
            <div className="lg:flex lg:mb-0 mb-4 flex-wrap gap-2 lg:justify-between justify-start ">
                {prices.children.map((price) => {
                    // Lấy component từ iconMap dựa trên tên icon trong database
                    const IconComponent =
                        price.icon && iconMap.hasOwnProperty(price.icon)
                            ? iconMap[price.icon as keyof typeof iconMap]
                            : null;

                    return (
                        <Link
                            className="py-4 px-5 md:py-8 md:px-12 border border-[#ec8524] flex flex-col gap-6 justify-center items-center"
                            key={price.id}
                            href={`/posts/${slugify(price.name)}?catId=${
                                price.id
                            }&page=1`}
                        >
                            <div className="w-20 h-20 rounded-full bg-[#ec8524] flex justify-center items-center">
                                {/* Render icon nếu tồn tại */}
                                {IconComponent && (
                                    <IconComponent className="w-10 h-10 fill-white" />
                                )}
                            </div>

                            <div className="uppercase text-[#ec8524] font-bold">
                                {price.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default PriceModule;
