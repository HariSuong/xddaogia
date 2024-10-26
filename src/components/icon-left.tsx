import Image from "next/image";
import React from "react";

const IconLeft = () => {
    return (
        <div className="icon_left fixed bottom-20 left-5 z-50 text-center w-12">
            <a
                className="icon_phone bg-blue-900 w-12 h-12 flex items-center justify-center my-3 p-2 rounded-full shadow-lg"
                href="tel:0938881785"
                rel="nofollow"
            >
                <Image
                    src="/icon/i_call.png"
                    alt="Call"
                    width={40}
                    height={40}
                />
            </a>
            <a
                className="icon_zalo bg-blue-500 w-12 h-12 flex items-center justify-center my-3 p-2 rounded-full shadow-lg"
                href="https://zalo.me/0938881785"
                rel="nofollow"
            >
                <Image
                    src="/icon/i_zalo.png"
                    alt="Zalo"
                    width={40}
                    height={40}
                />
            </a>
        </div>
    );
};

export default IconLeft;
