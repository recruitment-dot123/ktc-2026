import { site } from "@/config/site";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "K-TECH Job Fair 2025 - Policy",
  description:
    "Sự kiện việc làm ngành công nghệ Hàn Quốc quy tụ hơn 30 công ty công nghệ Hàn Quốc do Chính phủ Hàn Quốc tài trợ, với hàng trăm cơ hội việc làm cho các lập trình viên tài năng của Việt Nam.",
  keywords: [
    "LIKELION",
    "Hàn Quốc",
    "việc làm",
    "IT jobs",
    "Korea IT job",
    "ngày hội việc làm ngành công nghệ thông tin",
    "cơ hội việc làm ngành công nghệ thông tin",
    "K-Tech job fair",
    "việc làm hàn quốc",
    "việc làm lập trình viên",
    "front-end dev",
    "back-end dev",
    "việc làm lập trình",
    "job fair hàn quốc",
    "job fair",
    "k-tech job fair 2025",
  ],
  openGraph: {
    url: "./opengraph-image-v2.jpg",
  },
  metadataBase: new URL(site.baseUrl),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  referrer: "origin-when-cross-origin",
  // other: {
  //   "google-site-verification": "To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE",
  // },
};

export default function MDXLayout({ children }: { children: ReactNode }) {
  return (
    <div className="prose lg:prose-xl my-28 max-w-screen-xl mx-auto px-8">
      <div className="bg-[#F2FAFF] px-8 py-2 rounded-md">{children}</div>
    </div>
  );
}
