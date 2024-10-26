"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Khai báo kiểu dữ liệu cho mỗi hình ảnh
interface Image {
    src: string;
    title: string;
}

// Danh sách hình ảnh
const images: Image[] = [
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-2.jpg", title: "Mẫu nhà 2" },
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-4.jpg", title: "Mẫu nhà 4" },
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-10.jpg", title: "Mẫu nhà 10" },
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-20.jpg", title: "Mẫu nhà 20" },
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-29.jpg", title: "Mẫu nhà 29" },
    { src: "/demo-home/2tang/mau-nha-2-tang-dep-35.jpg", title: "Mẫu nhà 35" },
    // { src: '/path/to/image2.jpg', title: 'Mẫu nhà 2' },
    // Thêm các hình ảnh khác vào đây
];

const Gallery: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleOpen = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="cursor-pointer">
                    {/* <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
            onClick={() => handleOpen(index)}
          /> */}

                    <Image
                        src={image.src}
                        alt={image.title}
                        width={800} // Set width cơ bản để tối ưu hóa, không quan trọng cụ thể
                        height={600} // Set height cơ bản để tối ưu hóa, không quan trọng cụ thể
                        layout="responsive" // Cho phép ảnh linh hoạt theo container
                        className="rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                    />
                </div>
            ))}
            {open && (
                <Lightbox
                    slides={images}
                    open={open}
                    index={currentIndex}
                    close={() => setOpen(false)}
                />
            )}
        </div>
    );
};

export default Gallery;
