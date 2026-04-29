"use client";

import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/logo.svg";
import facebook from "/public/socials/facebook.svg";
import instagram from "/public/socials/instagram.svg";
import tiktok from "/public/socials/tiktok.svg";
import youtube from "/public/socials/youtube.svg";

export default function Footer() {
  const pathname = usePathname();

  const socials = [
    {
      label: "LIKELION Facebook",
      href: "https://www.facebook.com/likelionvietnam",
      src: facebook,
    },
    {
      label: "LIKELION Instagram",
      href: "https://www.instagram.com/likelionvn",
      src: instagram,
    },
    {
      label: "LIKELION Youtube",
      href: "https://www.youtube.com/@likelionvietnam",
      src: youtube,
    },
    {
      label: "LIKELION Tiktok",
      href: "https://www.tiktok.com/@likelionvietnam",
      src: tiktok,
    },
  ];

  return (
    <footer className="bg-[#F8F8F8]">
      <div className="container mx-auto py-[60px] md:py-[64px]">
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div className="flex-1">
            <Link href="/">
              <Image src={logo} alt="LIKELION" className="" height={36} />
            </Link>
            <p className="leading-relaxed mt-6 md:mt-4 text-[15px] text-[#666666]">
              Khám phá tiềm năng công nghệ của bạn với K-Tech
              <br />
              Mở rộng tư duy, phát triển kỹ năng và kết nối với doanh nghiệp Hàn
              Quốc.
            </p>
            <ul className="flex items-center space-x-4 mt-6 md:mt-10">
              {socials.map((social, idx) => (
                <li
                  className="w-10 h-10 border rounded-full flex items-center justify-center"
                  key={idx}
                >
                  <Link href={social.href} target="_blank">
                    <Image
                      src={social.src}
                      alt={social.label}
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {pathname !== site.registrationUrl && pathname !== "/cam-on" && (
            <ul className="justify-center flex-col space-y-5 sm:flex sm:space-x-4 sm:space-y-0 sm:w-1/4">
              {site.routes.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-gray-800 !ml-0 md:py-[8px] "
                >
                  <Link className="block w-full font-semibold" href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-8 items-center text-xs justify-between sm:flex sm:pt-4">
          &copy; 2025 LIKELION All rights reserved.
        </div>
      </div>
    </footer>
  );
}
