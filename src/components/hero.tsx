"use client";
import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";
import logo from "/public/MSSxKOSMExLIKELION Black BG.svg";

export default function Hero() {
  return (
    <section className="overflow-hidden mt-[70px]">
      <div className="md:bg-[url('/illustration.png')] md:bg-cover md:bg-center md:py-14 md:h-[92dvh]">
        <AnimationLayout
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div className="max-w-6xl mx-auto space-y-5 text-center z-30">
            <div className="mb-4 sm:mb-8">
              <Image src={logo} alt="logo" className="mx-auto h-4 sm:h-9" />
            </div>
            <h1 className="mx-auto text-xl sm:text-4xl font-bold lg:text-5xl max-w-sm sm:max-w-md md:max-w-none uppercase">
              <span className="flex items-center justify-center gap-2 flex-wrap">
                <span className="w-full lg:w-auto">
                  Tuyển dụng IT làm việc từ xa
                </span>
              </span>
              <span className="flex items-center gap-2 justify-center flex-wrap bg-clip-text sm:mt-5">
                <span className="w-full lg:w-auto">
                  cho doanh nghiệp tại Hàn Quốc
                </span>
              </span>
            </h1>
            <p className="max-w-2xl px-4 mx-auto text-xs md:text-balance lg:text-lg">
              Tuyển dụng và đào tạo những tài năng CNTT chất lượng cao của Việt
              Nam, đến làm việc tại các công ty công nghệ Hàn Quốc
            </p>

            <div className="flex px-4 flex-col mt-[28px] md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4 md:!mt-12">
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href={site.registrationUrl} target="_blank">
                  Ứng tuyển ngay
                </Link>
              </Button>
            </div>
            {/* <div className="text-sx font-bold bg-gradient-to-b from-[#ED174C] to-[#006DB8] bg-clip-text text-transparent">
              <p>MIỄN PHÍ THAM GIA</p>
              Hạn cuối ứng tuyển 01/08/2025
            </div> */}
            <div className="relative w-full h-[120px] block mt-8 md:hidden">
              <Image
                src="/illustration_mb.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimationLayout>
      </div>
    </section>
  );
}
