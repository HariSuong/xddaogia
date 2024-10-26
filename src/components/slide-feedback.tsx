"use client";

import React from "react";
import Slider from "react-slick";

// css slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import SampleNextArrow from "./sample-next-arrow";
import SamplePrevArrow from "./sample-prev-arrow";
import { Feedback } from "@/types/home";

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="right-0 md:right-4" />,
    prevArrow: <SamplePrevArrow className="w-28 h-28 md:w-50 md:h-50" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
            },
        },
    ],
};

const SlideFeedback: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
    return (
        <Slider {...settings}>
            {feedbacks.map((feedback) => (
                <div key={feedback?.name}>
                    <div className="flex flex-col justify-center gap-3 mt-20 xl:space-x-16 space-x-12">
                        <div className="self-center">
                            <Image
                                src={feedback.avatar}
                                width={240}
                                height={240}
                                className="xl:w-56 xl:h-56 lg:w-40 lg:h-40 w-36 h-36 mb-5 object-cover rounded-full"
                                alt={feedback.name}
                            />
                        </div>

                        <div className="flex">
                            <HiStar className="fill-yellow-600" />
                            <HiStar className="fill-yellow-600" />
                            <HiStar className="fill-yellow-600" />
                            <HiStar className="fill-yellow-600" />
                            <HiStar className="fill-yellow-600" />
                        </div>
                        <h3 className="font-bold lg:text-xl text-base mb-3 md:h-20">
                            {feedback.name}
                        </h3>
                        <p className="lg:text-base text-sm">
                            {feedback.content}
                        </p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default SlideFeedback;
