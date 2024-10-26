import { Slide } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider, { Settings } from "react-slick";
// css slick slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({
    className,
    style,
    onClick,
}) => {
    return (
        <FaArrowRight
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: 2,
                right: "2rem",
                color: "black",
                width: "2.5rem",
                height: "2.5rem",
                background: "white",
                padding: ".5rem",
            }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({
    className,
    style,
    onClick,
}) => {
    return (
        <>
            {/* <FaArrowRight /> */}
            <FaArrowLeft
                className={className}
                style={{
                    ...style,
                    display: "block",
                    zIndex: 2,
                    left: "2rem",
                    color: "black",
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "white",
                    padding: ".5rem",
                }}
                onClick={onClick}
            />
        </>
    );
};

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         nextArrow: undefined,
        //         prevArrow: undefined,
        //     },
        // },
        {
            breakpoint: 600,
            settings: {
                nextArrow: undefined,
                prevArrow: undefined,
                autoplay: true,
                autoplaySpeed: 3000,
            },
        },
        {
            breakpoint: 480,
            settings: {
                nextArrow: undefined,
                prevArrow: undefined,
                autoplay: true,
                autoplaySpeed: 3000,
            },
        },
    ],
};

const HeroSection: React.FC<{ slides: Slide[] }> = ({ slides }) => {
    return (
        // <div>aaa</div>
        <div className="w-full h-full overflow-hidden">
            <Slider {...settings} className="w-full h-full">
                {slides.map((slider) => (
                    <div
                        key={slider.image}
                        className="flex justify-center items-center "
                    >
                        {slider.link ? (
                            <Link href={slider.link}>
                                <Image
                                    alt={slider.title}
                                    src={slider.image}
                                    // src="https://xaydungnhattin.com/wp-content/uploads/2024/05/banner-web-0502.jpg"
                                    width={1920}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        ) : (
                            <Image
                                alt={slider.title}
                                src={slider.image}
                                // src="https://xaydungnhattin.com/wp-content/uploads/2024/05/banner-web-0502.jpg"
                                width={1920}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {/* <img src={slider.image} /> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSection;
