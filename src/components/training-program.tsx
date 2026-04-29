import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import CalendarDotsIcon from "/public/CalendarDotsIcon.svg";
import HourglassLowIcon from "/public/HourglassLowIcon.svg";
import TargetIcon from "/public/TargetIcon.svg";
import TrainingProgramImage from "/public/training_program.png";

export default function TrainingProgram() {
  const text = [
    {
      icon: HourglassLowIcon,
      title: "THỜI LƯỢNG",
      content: "36 giờ kỹ năng mềm trong vòng 3 tháng",
    },
    {
      icon: CalendarDotsIcon,
      title: "PHƯƠNG THỨC ĐÀO TẠO",
      content: (
        <>
          Tham gia Online vào buổi tối
          <p className="text-sm font-normal">(dự kiến từ 18:30 đến 20:00)</p>
        </>
      ),
    },
    {
      icon: TargetIcon,
      title: "MỤC TIÊU ĐÀO TẠO",
      content: (
        <>
          <p className="text-sm font-normal">&#8226; Hiểu sâu văn hoá và môi trường doanh nghiệp Hàn Quốc</p>
          <p className="text-sm font-normal">&#8226; Nâng cao kỹ năng giao tiếp tiếng Anh trong công việc</p>
          <p className="text-sm font-normal">&#8226; Rèn luyện phong cách làm việc chuyên nghiệp</p>
        </>
      ),
    },
  ];

  return (
    <section className="py-[40px] md:py-[100px]" id="chuong-trinh-dao-tao">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="max-w mx-auto text-center">
            <h2 className="text-xl font-bold sm:text-5xl">
              Lớp đào tạo kỹ năng mềm
            </h2>
            <p className="mt-8 text-center text-base md:text-xl">
              Lớp học dành riêng cho các ứng viên kết nối thành công với Doanh
              nghiệp
            </p>
          </div>
          <div className="mt-8 md:mt-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex flex-col w-full lg:w-1/2 space-y-2">
              {text.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-xl bg-[#FCFCFD] p-3 min-h-[100px]"
                >
                  <div className="flex-shrink-0 w-[76px] h-[76px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FFF0F1] to-[#E0F0FE]">
                    <Image src={item.icon} alt="icon" width={38} height={38} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-sm font-bold text-[#A3A3A3]">
                      {item.title}
                    </p>
                    <div className="text-lg md:text-xl font-bold">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src={TrainingProgramImage}
                alt="training"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
