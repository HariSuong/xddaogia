import Image from "next/image";
import React from "react";

const AuthorInfo = () => {
    return (
        <div className="bg-white p-6 my-12 shadow-md rounded-md border-t-4 border-[#ec8524]">
            <h2 className="text-[#ec8524] text-2xl font-bold mb-4 text-center">
                THÔNG TIN TÁC GIẢ
            </h2>
            <div className="md:flex md:flex-row flex-col md:gap-8 items-center">
                <div className="md:mb-0 mb-4">
                    <Image
                        src="/logo/logo.png"
                        alt="Logo Đào Gia"
                        width={525 / 2.5}
                        height={163 / 2.5}
                    />
                </div>
                <div>
                    <p className="text-gray-700 font-semibold">
                        <strong>Đào Gia</strong> đã có hơn 15 năm kinh nghiệm
                        thực chiến trong lĩnh vực xây dựng...
                    </p>
                    <p className="text-gray-700">
                        Không chỉ là một chuyên gia xây dựng có tay nghề vững và
                        kinh nghiệm thực chiến...
                    </p>
                </div>
            </div>
            {/* <div className='flex justify-center mt-6 space-x-4'>
        <a href='#' className='text-[#ec8524] hover:text-[#ec8524]'>
          <i className='fab fa-facebook fa-2x'></i>
        </a>
        <a href='#' className='text-[#ec8524] hover:text-[#ec8524]'>
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <a href='#' className='text-[#ec8524] hover:text-[#ec8524]'>
          <i className='fab fa-youtube fa-2x'></i>
        </a>
      </div> */}
        </div>
    );
};

export default AuthorInfo;
