import Title from "@/components/title";
import Image from "next/image";
import React from "react";
import { GiSemiClosedEye } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

const CoreValue = () => {
    return (
        <section className="container bg-white lg:py-12 py-6">
            <div className="mb-10 mx-auto">
                <Title title="Giá trị cốt lõi" subtitle="Tầm nhìn, sứ mệnh" />
            </div>
            <div className="lg:container mx-auto">
                <div className="lg:flex block items-start">
                    <div className="flex items-center gap-3 w-60 md:mb-0 mb-4">
                        <GiSemiClosedEye className="md:w-8 md:h-8 w-6 h-6" />
                        <h2 className="lg:text-3xl md:text-xl text-base font-bold text-gray-800 lg:mb-6 mb-0">
                            Tầm Nhìn
                        </h2>
                    </div>
                    <p className="lg:text-lg md:text-base text-sm text-gray-700 w-full lg:max-w-3xl mx-auto md:mb-12 mb-6">
                        ĐÀO GIA luôn nỗ lực để trở thành một trong những đơn vị
                        hàng đầu lĩnh vực tư vấn - thiết kế - thi công - sửa
                        chữa công trình xây dựng. Luôn là đối tác cùng với khách
                        hàng sáng tạo ra những thiết kế và công trình chất lượng
                        riêng cho từng gia đình, từng doanh nghiệp.
                    </p>
                </div>
                <div className="lg:flex block items-start">
                    <div className="flex items-center gap-3 w-60 md:mb-0 mb-4">
                        <GoGoal className="md:w-8 md:h-8 w-6 h-6" />
                        <h2 className="lg:text-3xl md:text-xl text-base font-bold text-gray-800 lg:mb-6 mb-0">
                            Sứ Mệnh
                        </h2>
                    </div>
                    <p className="lg:text-lg md:text-base text-sm text-gray-700 w-full lg:max-w-3xl mx-auto md:mb-12 mb-6">
                        Luôn nghiên cứu sáng tạo ra sản phẩm mới, không ngừng
                        cải tiến công nghệ, nâng cao năng suất và chất lượng để
                        trở thành một công ty hàng đầu về thi công công trình
                        xây dựng mang lại giá trị phát triển bền vững cho người
                        Việt.
                    </p>
                </div>

                <Image
                    src="/home/054914383.jpg"
                    width={1438}
                    height={1000}
                    alt="Công trình xây dựng"
                    className="h-auto mx-auto rounded-lg shadow-lg mb-12 w-full"
                />

                <h2 className="lg:text-3xl text-lg font-bold text-gray-800 mb-6">
                    Giá Trị Cốt Lõi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="py-6 px-2 lg:px-0 flex gap-3 justify-center items-center bg-orange-200 rounded-lg shadow-lg">
                        <div className="w-32">
                            <h3 className="text-xs font-semibold text-white w-28 h-28 bg-[#ec8524] rounded-full flex flex-col items-center justify-center uppercase gap-1">
                                <span className="font-extralight">Phục Vụ</span>
                                <span>Khách Hàng</span>
                            </h3>
                        </div>
                        <p className="mt-2 text-[#582828] max-w-xs text-sm md:text-base">
                            Trân trọng khách hàng, luôn có giải pháp hữu ích,
                            hợp lý để đáp ứng nhu cầu khách hàng.
                        </p>
                    </div>

                    <div className="py-6 px-2 lg:px-0 flex gap-3 justify-center items-center bg-orange-200 rounded-lg shadow-lg">
                        <div className="w-32">
                            <h3 className="text-xs font-semibold text-white w-28 h-28 bg-[#ec8524] rounded-full flex flex-col items-center justify-center uppercase gap-1">
                                <span className="font-extralight">
                                    {" "}
                                    Liên Tục
                                </span>
                                <span> Cải Tiến</span>
                            </h3>
                        </div>
                        <p className="mt-2 text-[#582828] max-w-xs text-sm md:text-base">
                            Mỗi người trong ĐÀO GIA phải phối hợp, hỗ trợ lẫn
                            nhau để hướng tới mục tiêu chung của công ty.
                        </p>
                    </div>
                    <div className="py-6 px-2 lg:px-0 flex gap-3 justify-center items-center bg-orange-200 rounded-lg shadow-lg">
                        <div className="w-32">
                            <h3 className="text-xs font-semibold text-white w-28 h-28 bg-[#ec8524] rounded-full flex flex-col items-center justify-center uppercase gap-1">
                                <span className="font-extralight">
                                    {" "}
                                    Đồng Tâm
                                </span>
                                <span> Hiệp Lực</span>
                            </h3>
                        </div>
                        <p className="mt-2 text-[#582828] max-w-xs text-sm md:text-base">
                            Không thỏa mãn với hiện trạng, luôn khát vọng cải
                            tiến kết quả công việc, hiệu quả làm việc và chất
                            lượng cuộc sống.
                        </p>
                    </div>

                    <div className="py-6 px-2 lg:px-0 flex gap-3 justify-center items-center bg-orange-200 rounded-lg shadow-lg">
                        <div className="w-32">
                            <h3 className="text-xs font-semibold text-white w-28 h-28 bg-[#ec8524] rounded-full flex flex-col items-center justify-center uppercase gap-1">
                                <span className="font-extralight">
                                    {" "}
                                    Cùng Nhau
                                </span>
                                <span> Phát Triển</span>
                            </h3>
                        </div>
                        <p className="mt-2 text-[#582828] max-w-xs text-sm md:text-base">
                            Gắn kết sự phát triển của ĐÀO GIA với cộng đồng và
                            với mọi người trong ĐÀO GIA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        // <section className='bg-white py-12'>
        //   <div className='container'>
        //     <div className='mb-10 mx-auto'>
        //       <Title title='Giá trị cốt lõi' subtitle='Tầm nhìn, sứ mệnh' />
        //     </div>
        //     <p className='text-lg text-gray-700 mx-auto mb-8'>
        //       <span className='font-bold uppercase'>
        //         Công Ty TNHH Dịch Vụ Tư Vấn Thiết Kế & Xây Dựng Đào Gia
        //       </span>{' '}
        //       với nhiều năm xây dựng, trưởng thành và phát triển đã dần trở thành
        //       một trong những công ty xây dựng dân dụng, công nghiệp, cầu đường tại
        //       TP HCM và các tỉnh lân cận.Với hệ thống thiết bi hiện đại công suất
        //       lớn tạo nên địa thế hợp lý đảm bảo chất lượng và tiến độ nhanh nhất sẽ
        //       làm hài lòng quý khách hàng.
        //     </p>
        //     <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
        //       <div className='p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2'>
        //         {/* <div className='text-5xl font-bold'>01</div> */}
        //         <FaTruckRampBox className='w-20 h-20 text-white' />
        //         <h3 className='text-xl  text-[#582828] font-semibold mt-4'>
        //           Hệ thống thiết bị,
        //           <br /> máy móc hiện đại
        //         </h3>
        //       </div>
        //       <div className='p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2'>
        //         {/* <div className='text-5xl font-bold text-orange-600'>02</div> */}
        //         <FaUsers className='w-20 h-20 text-white' />
        //         <h3 className='text-xl  text-[#582828] font-semibold mt-4'>
        //           Đội ngũ nhân sự đầy nhiệt huyết
        //         </h3>
        //       </div>
        //       <div className='p-6 bg-[#ec8524] rounded-lg shadow-md flex flex-col justify-center items-center gap-2'>
        //         {/* <div className='text-5xl font-bold text-orange-600'>03</div> */}
        //         <FaAward className='w-20 h-20 text-white' />

        //         <h3 className='text-xl  text-[#582828] font-semibold mt-4'>
        //           Chất lượng, uy tín, hiệu quả
        //         </h3>
        //       </div>
        //     </div>
        //   </div>
        // </section>
    );
};

export default CoreValue;
