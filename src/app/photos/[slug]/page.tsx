// pages/photos/[slug]/page.tsx

"use client";

import { usePhotos } from "@/hooks/photo/usePhotos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { SkeletonCard } from "@/components/skeleton-card";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
    const { currentPage, error, goToPage, loading, posts } = usePhotos();
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    if (loading) return <SkeletonCard />;
    if (error) return <div>Error fetching posts.</div>;

    if (!posts) return null; // Kiểm tra nếu posts là null

    const { data, links, last_page } = posts;
    console.log("data", data);

    return (
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-3 gap-4">
                    {data.map((src, index) => (
                        <Image
                            key={src.id}
                            src={src.name}
                            alt={src.caption || "Ảnh nhà đẹp"}
                            width={800} // Set width cơ bản để tối ưu hóa, không quan trọng cụ thể
                            height={600} // Set height cơ bản để tối ưu hóa, không quan trọng cụ thể
                            className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                            onClick={() => openLightbox(index)}
                            loading={index >= 3 ? "lazy" : undefined} // Chỉ lazy load những ảnh không phải ảnh đầu tiên
                            priority={index < 3} // Đặt priority cho ảnh đầu tiên
                        />
                    ))}
                </div>

                {/* Lightbox component */}
                {lightboxOpen && (
                    <Lightbox
                        slides={data.map(({ name }) => ({ src: name }))}
                        open={lightboxOpen}
                        index={currentIndex}
                        close={() => setLightboxOpen(false)}
                        carousel={{ finite: false }} // Thiết lập carousel để chuyển ảnh
                        controller={{ closeOnBackdropClick }}
                        on={{
                            view: (index) => console.log("View", index),
                        }}
                        // Custom styles for lightbox
                        styles={{
                            container: {
                                background: "rgba(0, 0, 0, 0.8)", // Nền mờ thay vì đen hoàn toàn
                            },
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
