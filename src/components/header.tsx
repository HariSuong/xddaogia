"use client";

import Dropdown from "@/components/dropdown";
import CategoriesDropdown from "@/components/photo/CategoriesDropdown";
import { SkeletonCard } from "@/components/skeleton-card";
import { useSetting } from "@/hooks/useSetting";
import { slugify } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Header() {
    const { data, isPending, error } = useSetting();
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error: {error.message}</div>;
    console.log("Header", data.headers);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start py-4 md:py-8 md:gap-12">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/logo/logo.png"
                        alt="Logo Đào Gia"
                        width={525 / 2.5}
                        height={163 / 2.5}
                    />
                </Link>
                <div className="flex flex-col md:flex-row items-start md:items-start mt-4 md:mt-0">
                    <div className="flex items-start">
                        <span className="border-r border-gray-400 pr-2">
                            <FaPhone color="#ec8524" size={24} />
                        </span>
                        <div className="ml-4">
                            <h1 className="text-sm lg:text-lg font-bold uppercase mb-2 md:mb-0">
                                Công Ty TNHH Dịch vụ tư vấn thiết kế & xây dựng
                                Đào Gia
                            </h1>
                            <p className="text-sm md:text-base">
                                Điện thoại:
                                <a
                                    className="inline-block"
                                    href="tel:0938881785"
                                >
                                    &nbsp; 0938 881 785
                                </a>
                            </p>
                            <p className="text-sm md:text-base">
                                Email:
                                <a
                                    className="inline-block"
                                    href="mailto:xddaogia@gmail.com"
                                >
                                    &nbsp; xddaogia@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start mt-4 md:mt-0">
                        <span className="border-r border-gray-400 pr-2">
                            <FaLocationDot color="#ec8524" size={24} />
                        </span>
                        <div className="ml-4">
                            <p className="text-sm md:text-base">
                                Trụ sở: 72/54G đường số 4, khu phố 6, p.Hiệp
                                Bình Phước, TP Thủ Đức, TPHCM
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-[#ec8524] text-white py-2 lg:py-0">
                <div className="container mx-auto flex flex-wrap justify-center uppercase text-sm md:text-base ">
                    {/* <a href='/' className='py-2 md:py-6 px-4 hover:bg-[#cb6506]'>
            Trang chủ
          </a> */}

                    {/* /posts/${slugify(cat.name)}?catId=${cat.id}&page=1 */}

                    {data.headers.map((menu) => (
                        // menu.display_type === 2 ? (
                        //     <Link
                        //         className="py-2 lg:py-6 md:text-base text-sm px-4 hover:bg-[#cb6506] uppercase"
                        //         key={menu.id}
                        //         href={menu.display_type === 2 ?`/posts/${slugify(menu.name)}?catId=${
                        //             menu.id
                        //         }&page=1`:  'javascript:void(0)'}
                        //     >
                        //         {menu?.children.length === 0 ? (
                        //             menu?.name
                        //         ) : (
                        //             <Dropdown
                        //                 childMenu={menu?.children}
                        //                 parentName={menu.name}
                        //                 type={menu.display_type}
                        //             />
                        //         )}
                        //     </Link>
                        // ) : (
                        //     <Link
                        //         className="py-2 lg:py-6 md:text-base text-sm px-4 hover:bg-[#cb6506] uppercase"
                        //         key={menu.id}
                        //         // href={`/photos/${slugify(menu.name)}?catId=${menu.id}&page=1`}
                        //         href="javascript:void(0)"
                        //     >
                        //         {menu?.children.length === 0 ? (
                        //             menu?.name
                        //         ) : (
                        //             <Dropdown
                        //                 childMenu={menu?.children}
                        //                 parentName={menu.name}
                        //                 type={menu.display_type}
                        //             />
                        //         )}
                        //     </Link>
                        // )

                        <Link
                            className="py-2 lg:py-6 md:text-base text-sm px-4 hover:bg-[#cb6506] uppercase"
                            key={menu.id}
                            href={
                                menu.display_type === 2
                                    ? `/posts/${slugify(menu.name)}?catId=${
                                          menu.id
                                      }&page=1`
                                    : "#"
                            }
                        >
                            {menu?.children.length === 0 ? (
                                menu?.name
                            ) : (
                                <Dropdown
                                    childMenu={menu?.children}
                                    parentName={menu.name}
                                    type={menu.display_type}
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
