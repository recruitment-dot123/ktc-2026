import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import jobkoreaLogo from "/public/JOBKOREA logo.svg";
import kosmeLogo from "/public/KOSME logo.svg";
import likelionLogo from "/public/LIKELION logo.svg";
import mssLogo from "/public/MSS logo.svg";

export default function Advantage() {
  const features = [
    {
      title: "Job Hàn hot độc quyền cho Developer Việt",
      desc: "Apply job quốc tế mà không lo cạnh tranh với dev nước ngoài",
    },
    {
      title:
        "Đa dạng các vị trí tuyển dụng",
      desc: "Từ Backend, Frontend, Mobile & AI đến Game Developer – Cơ hội cho mọi Developer",
    },
    {
      title: "Hỗ trợ xuyên suốt quá trình ứng tuyển",
      desc: "Từ apply, phỏng vấn đến onboard – Luôn có chúng tôi sát cánh cùng bạn",
    },
    {
      title: "Việc làm quốc tế remote",
      desc: "Làm việc trực tiếp với công ty Hàn Quốc mà không phải lo thủ tục rườm rà",
    },
  ];

  return (
    <section className="py-[40px] md:py-[100px]">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="mx-auto md:text-center text-left">
            <h2 className="text-xl text-center font-bold sm:text-5xl">
              Điểm khác biệt của K-Tech College 2025
            </h2>
            <p className="mt-8 text-center text-base md:text-xl">
              Vì sao nên tham gia K-Tech College 2025? 
            </p>
          </div>
          <div className="mt-8 sm:mt-[60px]">
            <ul className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center justify-center space-y-3 p-[56px_16px] sm:p-[30px] rounded-[20px] border bg-[#FCFCFD] border-[#EFEEED] shadow-[0px_64px_64px_-48px_#0F0F0F1A]"
                >
                  <h4 className="text-lg text-pink-500 font-semibold whitespace-pre-line">
                    {item.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h4>
                  <div className="text-sm !mt-5">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
