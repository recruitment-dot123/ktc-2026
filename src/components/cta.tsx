import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import pattern from "/public/patterns/cta-pattern.jpg";
import leftLine from "/public/patterns/cta-pattern-left.svg";
import rightLine from "/public/patterns/cta-pattern-right.svg";
import { site } from "@/config/site";
import AnimationLayout from "./shared/animation-layout";

export default function CTA() {
  return (
    <section className="pt-14">
      <div className="container">
        <div className="relative px-4 sm:px-8 py-8 sm:py-12 overflow-hidden md:px-8 rounded-3xl bg-[#101416]">
          <Image
            src={pattern}
            className="absolute inset-0 object-cover md:hidden"
            alt="Background Pattern"
            fill
          />
          <Image
            src={leftLine}
            alt="Background Pattern"
            className="absolute h-full top-0 -left-20 hidden md:block"
          />
          <Image
            src={rightLine}
            alt="Background Pattern"
            className="absolute h-full top-0 -right-20 hidden md:block"
          />
          <div className="relative sm:max-w-lg mx-auto text-center max-w-sm">
            <div className="sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 md:text-4xl">
                Cơ hội làm việc tại Hàn Quốc ngay trong tầm tay bạn
              </h3>
              <p className="mt-4 leading-relaxed text-gray-300">
                Tham gia ngay dự án K-Tech College cùng MSS và LIKELION để có cơ
                hội đến và làm việc tại Hàn Quốc với chi phí 0 đồng.
              </p>
            </div>
            <div className="items-center justify-center gap-3 mt-4 sm:flex">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href={site.registrationUrl} target="_blank">
                  Ứng tuyển ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
