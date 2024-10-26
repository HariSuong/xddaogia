import React from "react";
import { FaPhone } from "react-icons/fa6";

const PhoneLink = () => {
    return (
        <div className="dang_ky_fix animate-bounce fixed bottom-0 left-5 text-center bg-[#ec8524] mt-2 text-white z-50 font-roboto-condensed text-xl uppercase px-8 py-2 font-bold">
            <a
                href="tel:0938881785"
                rel="noreferrer noopener"
                className="flex items-center gap-3"
            >
                <FaPhone className="w-6 h-6 pr-1" />
                <span>0938 881 785</span>
            </a>
        </div>
    );
};

export default PhoneLink;
