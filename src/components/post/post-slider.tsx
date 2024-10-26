import PostItem from "@/components/post/post-item";
import SampleNextArrow from "@/components/sample-next-arrow";
import SamplePrevArrow from "@/components/sample-prev-arrow";
import { PostListProps } from "@/types/posts";
import React from "react";
import Slider from "react-slick";
// css slick slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const PostSlider: React.FC<PostListProps> = ({ posts }) => {
    return (
        // <div className="container">
        <Slider {...settings}>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    desc={post.desc}
                    thumb={post.thumb}
                    title={post.title}
                />
            ))}
        </Slider>
        // </div>
    );
};

export default PostSlider;
