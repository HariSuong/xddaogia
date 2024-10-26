"use client";
import IconLeft from "@/components/icon-left";
import PhoneLink from "@/components/phonelink";
import { SkeletonCard } from "@/components/skeleton-card";
import { useSetting } from "@/hooks/useSetting";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    const { data, isPending, error } = useSetting();
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <footer className="bg-[#202020] px-10 py-28 font-[sans-serif] tracking-wide">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/** Về chúng tôi */}
                    <div>
                        <div>
                            <Image
                                src="/logo/logo.png"
                                alt="Logo Đào Gia"
                                width={525 / 2.5}
                                height={163 / 2.5}
                            />

                            <p className="text-[#ec8524] font-bold">
                                Công Ty TNHH Dịch vụ tư vấn thiết kế & xây dựng
                                Đào Gia
                            </p>
                            <p className="text-white mb-2">
                                Chúng tôi chuyên thi công xây dựng mới, sửa chữa
                                nhà phố, hồ bơi biệt thự, kinh doanh
                            </p>
                        </div>
                    </div>

                    {/** Kho hàng */}
                    <div className="text-white">
                        <h4 className="text-lg font-bold mb-4 text-white">
                            Liên kết nhanh
                        </h4>
                        <div className="flex flex-col gap-2">
                            {data.headers.map((cat) => (
                                <Link
                                    key={cat.id}
                                    href={`/posts/${slugify(cat.name)}?catId=${
                                        cat.id
                                    }&page=1`}
                                    className="hover:text-[#ec8524] uppercase"
                                >
                                    {cat.name}
                                </Link>
                            ))}
                            {/* <Link href='/news' className='hover:text-[#ec8524]'>
                Thi công xây dựng nhà mới
              </Link>
              <Link href='/news' className='hover:text-[#ec8524]'>
                Sửa chữa công trình
              </Link>
              <Link href='/news' className='hover:text-[#ec8524]'>
                Báo giá
              </Link>
              <Link href='/projects' className='hover:text-[#ec8524]'>
                Dự án tiêu biểu
              </Link>
              <Link href='/news' className='hover:text-[#ec8524]'>
                Tin tức
              </Link>
              <Link href='/about' className='hover:text-[#ec8524]'>
                Giới thiệu
              </Link> */}
                        </div>
                    </div>

                    {/** Trụ sở chính */}
                    <div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">
                                Trụ sở chính
                            </h4>
                            <p className="text-white mb-2">
                                Địa chỉ:
                                <Link
                                    href="https://www.google.com/maps?ll=10.81054%2C106.629364&amp;z=12&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;cid=7325080303277126082"
                                    target="_blank"
                                    rel="noopener"
                                    className="hover:text-[#ec8524]"
                                >
                                    &nbsp; 72/54G đường số 4, khu phố 6, p.Hiệp
                                    Bình Phước, TP Thủ Đức, TPHCM
                                </Link>
                            </p>
                            <p className="text-white mb-2">
                                Điện thoại:
                                <Link
                                    href="tel:0938881785"
                                    className="hover:text-[#ec8524]"
                                >
                                    &nbsp; 0938 881 785
                                </Link>
                            </p>
                            <p className="text-white mb-2">
                                Email:
                                <Link
                                    className="inline-block hover:text-[#ec8524]"
                                    href="mailto:xddaogia@gmail.com"
                                >
                                    &nbsp; xddaogia@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/** Thông tin cần biết */}
                    <div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">
                                Thông tin cần biết
                            </h4>
                            <ul className="text-white space-y-2">
                                {data.articles.map((article) => {
                                    return (
                                        <li key={article.id}>
                                            <Link
                                                href={`/article/${slugify(
                                                    article.title
                                                )}/${article.id}`}
                                                className="hover:text-[#ec8524]"
                                            >
                                                {article.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PhoneLink />
            <IconLeft />
        </footer>
    );
};

export default Footer;
