import Image from "next/image";
import CalendarDotsIcon from "/public/CalendarDotsIcon.svg";
import HourglassLowIcon from "/public/HourglassLowIcon.svg";
import MapPinIcon from "/public/MapPinIcon.svg";
import OnboardingImage from "/public/onboarding.jpg";

export default function Onboarding() {
  const text = [
    {
      icon: HourglassLowIcon,
      title: "THỜI LƯỢNG",
      content: (
        <>
          3 - 6 tháng
          <p className="text-sm font-normal">(Tuỳ vị trí)</p>
        </>
      ),
    },
    {
      icon: CalendarDotsIcon,
      title: "HÌNH THỨC",
      content: (
        <>
          Toàn thời gian
          <p className="text-sm font-normal">(8 tiếng / 5 ngày / tuần)</p>
        </>
      ),
    },
    {
      icon: MapPinIcon,
      title: "ĐỊA ĐIỂM",
      content: (
        <>
          Onsite/Remote
          <p className="text-sm font-normal">
            Tùy theo yêu cầu của mỗi Doanh nghiệp
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-[40px] md:py-[100px]" id="chuong-trinh-dao-tao">
      <div className="container">
        <div className="max-w mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">Onboarding</h2>
          <p className="mt-8 text-center text-base md:text-xl">
            Làm việc với doanh nghiệp công nghệ Hàn Quốc
          </p>
        </div>
        <div className="mt-8 md:mt-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src={OnboardingImage}
              alt="training"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

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
        </div>
      </div>
    </section>
  );
}
