import Title from "@/components/title";
import React from "react";
import { FaAward, FaTruckRampBox, FaUsers } from "react-icons/fa6";

const AboutCompany = () => {
    return (
        <section className="bg-white py-12">
            <div className="container">
                <div className="mb-10 mx-auto">
                    <Title
                        title="Đến Với Chúng Tôi"
                        subtitle="Chào Mừng Quý Khách Hàng"
                    />
                </div>
                <p className="lg:text-lg text-sm text-gray-700 mx-auto mb-8">
                    <span className="font-bold uppercase">
                        Công Ty TNHH Dịch Vụ Tư Vấn Thiết Kế & Xây Dựng Đào Gia
                    </span>{" "}
                    với nhiều năm xây dựng, trưởng thành và phát triển đã dần
                    trở thành một trong những công ty xây dựng dân dụng, công
                    nghiệp, cầu đường tại TP HCM và các tỉnh lân cận.Với hệ
                    thống thiết bi hiện đại công suất lớn tạo nên địa thế hợp lý
                    đảm bảo chất lượng và tiến độ nhanh nhất sẽ làm hài lòng quý
                    khách hàng.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
                        {/* <div className='text-5xl font-bold'>01</div> */}
                        <FaTruckRampBox className="lg:w-20 lg:h-20 w-10 h-10 text-white" />
                        <h3 className="lg:text-xl text-sm text-[#582828] font-medium lg:font-semibold mt-4">
                            Hệ thống thiết bị,
                            <br /> máy móc hiện đại
                        </h3>
                    </div>
                    <div className="p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
                        {/* <div className='text-5xl font-bold text-orange-600'>02</div> */}
                        <FaUsers className="lg:w-20 lg:h-20 w-10 h-10 text-white" />
                        <h3 className="lg:text-xl text-sm text-[#582828] font-medium lg:font-semibold mt-4">
                            Đội ngũ nhân sự đầy nhiệt huyết
                        </h3>
                    </div>
                    <div className="p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
                        {/* <div className='text-5xl font-bold text-orange-600'>03</div> */}
                        <FaAward className="lg:w-20 lg:h-20 w-10 h-10 text-white" />

                        <h3 className="lg:text-xl text-sm text-[#582828] font-medium lg:font-semibold mt-4">
                            Chất lượng, uy tín, hiệu quả
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
