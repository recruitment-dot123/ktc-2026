import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";
import about from "/public/about.jpg";

const text = [
  {
    title: "K-Tech College 2025 là gì?",
    description: (
      <div>
        <p>
          K-Tech College 2025 là <b>chương trình kết nối việc làm</b>{" "}
          dành cho những lập trình viên trẻ tài năng tại Việt Nam, được Chính
          phủ Hàn Quốc tài trợ 100% và LIKELION trực tiếp vận hành.
        </p>
        <p>
          Chương trình không chỉ mở ra <b>cánh cửa việc làm tại các doanh nghiệp
          công nghệ Hàn Quốc</b>, mà còn đồng hành trong việc <b>phát triển kỹ năng mềm
          và tư duy làm việc toàn cầu</b>. Đây chính là bệ phóng giúp bạn tìm được
          công việc phù hợp, nâng tầm bản thân và sẵn sàng bứt phá sự nghiệp
          trong môi trường quốc tế.
        </p>
      </div>
    ),
    img: about,
  },
];

export default function AboutUs() {
  return (
    <section id="gioi-thieu" className="bg-[#F2FAFF] py-[60px] md:py-[120px]">
      <div className="container">
        <div className="space-y-12">
          {text.map((item, idx) => (
            <AnimationLayout
              className="duration-1000 delay-300"
              isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0 translate-y-12",
              }}
              key={idx}
            >
              <div
                className={cn(
                  "mx-auto text-gray-600 gap-x-12 items-start justify-between lg:flex",
                  idx % 2 != 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="hidden lg:block lg:max-w-xl">
                  <Image
                    src={item.img}
                    className="rounded-lg"
                    alt={item.title}
                  />
                </div>

                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                  <div className="max-w-2xl">
                    <h3 className="text-gray-800 text-[20px] text-center md:text-left font-bold sm:text-5xl mb-4">
                      {item.title}
                    </h3>
                    <div className="[&_p]:mb-3">{item.description}</div>
                    <Button size="lg" className="w-full md:w-auto mt-4" asChild>
                      <Link href={site.registrationUrl} target="_blank">
                        Ứng tuyển ngay
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationLayout>
          ))}
        </div>
      </div>
    </section>
  );
}
