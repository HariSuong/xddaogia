import React from "react";
import SeeAll from "./see-all";

interface TitleProps {
    title: string;
    subtitle?: string;
    to?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, to }) => {
    return (
        <div className="flex items-center justify-between sm:px-6 md:px-0 lg:px-0 md:my-10 my-4">
            <div>
                {subtitle && (
                    <p className="uppercase font-light lg:text-2xl md:text-xl md:mb-4 mb-1 text-[#ec8524] none">
                        {subtitle}
                    </p>
                )}
                <h2 className="font-bold lg:text-4xl md:text-2xl lg:tracking-tight md:tracking-normal text-[#582828] uppercase text-xl">
                    {title}
                </h2>
            </div>
            {to && <SeeAll to={to} />}
        </div>
    );
};

export default Title;
