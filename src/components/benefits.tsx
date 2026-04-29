import { cn } from "@/lib/utils";
import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import benefit_1 from "/public/benefit_1.jpg";
import benefit_2 from "/public/benefit_2.png";
import benefit_3 from "/public/benefit_3.png";
import benefit_4 from "/public/benefit_4.png";

export default function Benefits() {
  const features = [
    {
      image: benefit_2,
      title: "Kết nối với doanh nghiệp Hàn Quốc",
      desc: "Tham gia vào mạng lưới hơn 30 công ty đang tìm kiếm nhân sự công nghệ tại Việt Nam.",
    },
    {
      image: benefit_4,
      title: "Cơ hội nhận offer quốc tế",
      desc: "Đạt mức lương lên đến $2000/tháng, tùy theo năng lực, vị trí và kinh nghiệm.",
    },
    {
      image: benefit_1,
      title: "Đào tạo kỹ năng mềm",
      desc: "Trang bị các kỹ năng và kiến thức thực tiễn để thích nghi và phát triển trong môi trường làm việc quốc tế.",
    },
    {
      image: benefit_3,
      title: "Chuyến tham quan Hàn Quốc",
      desc: "Trải nghiệm văn hóa và tham quan doanh nghiệp công nghệ tại Hàn Quốc. Cơ hội học hỏi trực tiếp và mở rộng góc nhìn nghề nghiệp quốc tế (số lượng giới hạn).",
    },
  ];

  return (
    <section className="py-[60px] md:py-[120px]">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl text-center font-bold sm:text-5xl">
              Quyền lợi tham gia
            </h2>
            <p className="mt-8 text-base md:text-xl">
              Bạn sẽ nhận được gì khi tham gia K-Tech College 2025
            </p>
          </div>
          <div className="mt-[56px] md:mt-[120px] space-y-12">
            {features.map((item, idx) => (
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
                    "mx-auto flex flex-col-reverse md:flex-row gap-x-[100px] items-stretch md:pb-8",
                    idx % 2 !== 1 ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                    <h3 className="text-[18px] font-semibold sm:text-4xl mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <div className="text-sm md:text-base mb-4">{item.desc}</div>
                  </div>
                </div>
              </AnimationLayout>
            ))}
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
