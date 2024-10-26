import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/lib/providers";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
// import { Header } from '@/components/header-top'

const comfortaa = Comfortaa({
    subsets: ["vietnamese"],
    preload: false, // Tắt preload cho font
});

export const metadata: Metadata = {
    title: "Công Ty TNHH Dịch vụ tư vấn thiết kế & xây dựng Đào Gia",
    description:
        "Chúng tôi chuyên thi công xây dựng mới, sửa chữa nhà phố, hồ bơi biệt thự, kinh doanh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/logo/fav.png"
                />
            </head>
            <body className={comfortaa.className}>
                <Providers>
                    <Header />

                    {children}

                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
