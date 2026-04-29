import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";
import BookOpenIcon from "/public/BookOpenIcon.svg";
import HeadCircuitIcon from "/public/HeadCircuitIcon.svg";
import ToolboxIcon from "/public/ToolboxIcon.svg";
import UsersThreeIcon from "/public/UsersThreeIcon.svg";

const text = [
  {
    icon: BookOpenIcon,
    title: "Trình độ học vấn",
    desc: "Tốt nghiệp đại học chuyên ngành CNTT hoặc chuyên ngành liên quan",
  },
  {
    icon: ToolboxIcon,
    title: "Kinh nghiệm làm việc",
    desc: "Có tối thiểu 2 năm kinh nghiệm làm việc trong lĩnh vực lập trình",
  },
  {
    icon: HeadCircuitIcon,
    title: "Kỹ năng chuyên môn",
    desc: "Các kỹ năng chuyên môn Front-End, Back-End hoặc Data Science",
  },
  {
    icon: UsersThreeIcon,
    title: "Yêu cầu khác",
    desc: "Ứng viên từ 23–35 tuổi, tiếng Anh giao tiếp tốt (bắt buộc), khả năng tiếng Hàn là lợi thế",
  },
];

export default function Participant() {
  return (
    <section
      id="doi-tuong-tham-gia"
      className="bg-[#F5FAFF] py-[60px] md:py-[120px]"
    >
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
              Đối tượng tham gia
            </h2>
            <p className="mt-8 text-center text-base md:text-xl">
              Chúng tôi đang tìm kiếm những ai?
            </p>
          </div>
          <div className="mt-8 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {text.map((item, idx) => (
              <div
                key={idx}
                className="h-full bg-white rounded-[20px] p-[32px_16px] flex flex-col items-center text-center shadow-[0px_64px_64px_-48px_#0F0F0F1A]"
              >
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDEFF3] via-[#EEF6FF] to-[#EEF6FF] mb-8">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="w-[38px] h-[38px]"
                  />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-[#7B7B8C] text-base">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-[60px] flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={site.registrationUrl} target="_blank">
                Ứng tuyển ngay
              </Link>
            </Button>
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
