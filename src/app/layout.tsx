import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import PhoneCall from "@/components/shared/phone-call";
import ThirdParties from "@/components/third-parties";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
// import Popup from "@/components/shared/pop-up";
// import KtcPopup from "@/components/ktc-pop-up";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import Analytics from "@/components/analytics";
import FacebookPixel from "@/components/facebookPixel";
import MessengerChat from "@/components/messenger";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import Script from "next/script";
import { Suspense } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title:
    "Dự Án Đào Tạo Miễn Phí Và Giới Thiệu Việc Làm IT Tại Hàn Quốc | K-Tech College",
  description:
    "K-Tech College 2025 là chương trình thực tập sinh đặc biệt, cung cấp cho các lập trình viên các kỹ năng cần thiết, hiểu rõ về văn hóa làm việc tại Hàn Quốc và tạo điều kiện để bạn tìm được công việc mong muốn tại Hàn Quốc.",
  keywords: [
    "LIKELION",
    "Hàn Quốc",
    "việc làm",
    "visa E-7",
    "đào tạo lập trình miễn phí",
    "đào tạo IT Hàn Quốc",
    "chương trình đào tạo lập trình Hàn Quốc",
    "việc làm IT Hàn Quốc",
    "dự án đào tạo lập trình miễn phí",
    "đào tạo lập trình web/back-end miễn phí",
    "giới thiệu việc làm IT Hàn Quốc",
    "đào tạo kỹ năng mềm Hàn Quốc",
    "học lập trình đi làm việc Hàn Quốc",
    "đào tạo lập trình nhận visa Hàn Quốc",
    "đào tạo kỹ năng làm việc Hàn Quốc",
    "khóa học lập trình hướng nghiệp Hàn Quốc",
    "chương trình đào tạo nhân lực IT Hàn Quốc",
    "đào tạo lập trình được tài trợ Hàn Quốc",
    "dự án đào tạo nhân lực IT từ bộ doanh nghiệp Hàn Quốc",
  ],
  openGraph: {
    title:
      "Dự Án Đào Tạo Miễn Phí Và Giới Thiệu Việc Làm IT Tại Hàn Quốc | K-Tech College",
    description:
      "K-Tech College 2025 là chương trình thực tập sinh đặc biệt, cung cấp cho các lập trình viên các kỹ năng cần thiết, hiểu rõ về văn hóa làm việc tại Hàn Quốc và tạo điều kiện để bạn tìm được công việc mong muốn tại Hàn Quốc.",
    url: "https://ktc.likelion.edu.vn",
    siteName: "K-Tech College",
    images: [
      {
        url: "https://ktc.likelion.edu.vn/opengraph-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "K-Tech College 2025",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "education",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": "To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <head>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </head>
        <body className={cn("antialiased", fontSans.className)}>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <FacebookPixel />
          {/* <KtcPopup /> */}
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <div className="fixed bottom-10 right-4 sm:bottom-8 sm:right-6 z-50">
            <div className="flex flex-col gap-4">
              <MessengerChat />
            </div>
          </div>
          <Footer />
          <PhoneCall />
          <ThirdParties />
          <Toaster position="top-center" />
        </body>
      </html>
    </Providers>
  );
}
