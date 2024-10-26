"use client";

import AboutCompany from "@/components/home/about-company";
import CoreValue from "@/components/home/core-value";
import FeedBack from "@/components/home/feedback";
import HeroSection from "@/components/home/hero-section";
import PriceModule from "@/components/home/price-module";
import WhyChooseUs from "@/components/home/why-choose-us";
import PostHome from "@/components/post/post-home";
import { useHome } from "@/hooks/useHome";

export default function Main() {
    const { data, error, isPending } = useHome();
    // console.log(data);

    return (
        <>
            <HeroSection slides={data?.slides ?? []} />
            <div id="observer-target">
                <AboutCompany />
                <PriceModule />

                <CoreValue />
                <WhyChooseUs />
                <PostHome data={data?.posts ?? []} />

                <FeedBack feedbacks={data?.feedbacks ?? []} />
            </div>
        </>
    );
}
