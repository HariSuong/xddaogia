import React from "react";

import Title from "../title";
import SlideFeedback from "../slide-feedback";
import Image from "next/image";
import { Feedback } from "@/types/home";

const FeedBack: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
    return (
        <div className="md:mb-40 my-10 h-max relative ">
            <div className="container">
                <Title title="FEEDBACK" subtitle="khách hàng nói gì" />
            </div>
            <div className="lg:px-14 xl:px:28 px-6">
                <SlideFeedback feedbacks={feedbacks} />
            </div>
        </div>
    );
};

export default FeedBack;
