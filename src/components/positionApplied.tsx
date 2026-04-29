"use client";

import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";

export default function PositionApplied() {
  const jobs = [
    {
      imageUrl: "/ai-developer.jpg",
      title: "AI Developer",
      description: "Phát triển giải pháp trí tuệ nhân tạo và mô hình học máy.",
    },
    {
      imageUrl: "/be-developer.jpg",
      title: "Back End Developer",
      description:
        "Xây dựng và quản lý hệ thống phía máy chủ, API, cơ sở dữ liệu.",
    },
    {
      imageUrl: "/fe-developer.jpg",
      title: "Front End Developer",
      description: "Thiết kế và lập trình giao diện người dùng trên web/app.",
    },
    {
      imageUrl: "/fullstack-developer.jpg",
      title: "Full Stack Developer",
      description: "Phát triển cả front-end và back-end cho các ứng dụng web.",
    },
    {
      imageUrl: "/mobile-developer.jpg",
      title: "Mobile Developer",
      description: "Thiết kế và lập trình ứng dụng di động trên iOS/Android.",
    },
    {
      imageUrl: "/ui-ux-designer.jpg",
      title: "UI/UX Designer",
      description:
        "Thiết kế trải nghiệm và giao diện người dùng tối ưu, thân thiện.",
    },
  ];

  return (
    <section className="py-[40px] md:py-[100px] bg-[#F2FAFF]">
      <AnimationLayout
        className="h-full duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="mx-auto md:text-center text-left">
            <h2 className="text-xl text-center font-bold sm:text-5xl">
              Cơ hội việc làm
            </h2>
            <p className="mt-8 text-center text-base md:text-xl">
              Các vị trí bạn có thể ứng tuyển trong khuôn khổ K-Tech College 2025
            </p>
          </div>
          <Swiper
            modules={[Autoplay]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="!p-4 mt-8"
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center p-6 md:p-8 bg-white rounded-2xl shadow-md h-full">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                    <Image
                      src={job.imageUrl}
                      alt={job.title}
                      width={400}
                      height={200}
                      className="w-full h-40 md:h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                      {job.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600">
                      {job.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 md:mt-[60px] flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={site.opportunitiesUrl} target="_blank">
                Khám phá danh sách công việc
              </Link>
            </Button>
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
