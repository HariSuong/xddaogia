import React from "react";
import "animate.css/animate.min.css";
import {
    FaCircleDollarToSlot,
    FaHandshakeAngle,
    FaPeopleRoof,
} from "react-icons/fa6";
import Title from "@/components/title";

const WhyChooseUs = () => {
    return (
        <section className="container bg-white py-12">
            <div className="mb-10 mx-auto">
                <Title title="Nên chọn chúng tôi?" subtitle="Tại sao" />
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                    {/* Image Box */}
                    <div
                        className="relative shadow-lg rounded-3xl transition-transform duration-300 transform hover:scale-105 text-center p-5 animate__animated animate__fadeInLeft bg-gradient-to-r from-[#582828] to-[#ec8524]"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {/* Featured Image */}
                        <div className="featured-img mb-4 flex justify-center">
                            <FaHandshakeAngle className="w-12 h-12 fill-white" />
                        </div>
                        {/* Icon Text */}
                        <div className="icon-text text-white">
                            <h3 className="mb-2 md:text-xl text-lg font-semibold h-9">
                                CAM KẾT ĐẢM BẢO TIẾN ĐỘ
                            </h3>
                            <p className="text-sm md:text-base">
                                Cùng với sự sát sao của Ban Lãnh Đạo. ĐÀO GIA
                                luôn đặt sự tín nhiệm của Chủ Đầu Tư lên hàng
                                đầu, chúng tôi cam kết nỗ lực để hoàn thành mục
                                tiêu đã đề ra.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                    {/* Image Box */}
                    <div
                        className="relative shadow-lg rounded-3xl transition-transform duration-300 transform hover:scale-105 text-center p-5 animate__animated animate__fadeInUp bg-gradient-to-r from-[#582828] to-[#ec8524]"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Featured Image */}
                        <div className="featured-img mb-4 flex justify-center">
                            <FaCircleDollarToSlot className="w-12 h-12 fill-white" />
                        </div>
                        {/* Icon Text */}
                        <div className="icon-text text-white">
                            <h3 className="mb-2 md:text-xl text-lg font-semibold h-9">
                                GIÁ CẢ HỢP LÝ
                            </h3>
                            <p className="text-sm md:text-base">
                                Nhờ dây chuyển chuyên nghiệp khép kín từ khâu
                                thiết kế đến thi công bảo hành đã giúp ĐÀO GIA
                                đưa ra giải pháp trọn gói với mức giá cạnh tranh
                                nhất.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    {/* Image Box */}
                    <div
                        className="relative shadow-lg rounded-3xl transition-transform duration-300 transform hover:scale-105 text-center p-5 animate__animated animate__fadeInRight bg-gradient-to-r from-[#582828] to-[#ec8524]"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {/* Featured Image */}
                        <div className="featured-img mb-4 flex justify-center">
                            <FaPeopleRoof className="w-12 h-12 fill-white" />
                        </div>
                        {/* Icon Text */}
                        <div className="icon-text text-white">
                            <h3 className="mb-2 md:text-xl text-lg font-semibold h-9">
                                AN TOÀN LAO ĐỘNG
                            </h3>
                            <p className="text-sm md:text-base">
                                Mỗi thành viên của ĐÀO GIA đều nhận thức được
                                tầm quan trọng của AN TOÀN LAO ĐỘNG. Chúng tôi
                                hình thành nên văn hóa làm việc an toàn tuyệt
                                đối.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
