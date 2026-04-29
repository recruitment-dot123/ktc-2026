import Image from "next/image";
import AnimationLayout from "./shared/animation-layout";
import jobkoreaLogo from "/public/JOBKOREA logo.svg";
import kosmeLogo from "/public/KOSME logo.svg";
import likelionLogo from "/public/LIKELION logo.svg";
import mssLogo from "/public/MSS logo.svg";

export default function Organization() {
  const features = [
    {
      logo: mssLogo,
      title: "Bộ Doanh nghiệp vừa và nhỏ và\n Khởi nghiệp Hàn Quốc",
      desc: "Hỗ trợ doanh nghiệp nhỏ và startup bằng các chính sách toàn diện, từ vốn đầu tư đến phát triển nhân lực và đổi mới công nghệ.",
    },
    {
      logo: kosmeLogo,
      title:
        "Cơ quan xúc tiến doanh nghiệp vừa và nhỏ\n và Khởi nghiệp Hàn Quốc",
      desc: "Thúc đẩy sự phát triển của doanh nghiệp thông qua các chương trình hỗ trợ tài chính, đào tạo và kết nối với thị trường quốc tế.",
    },
    {
      logo: likelionLogo,
      title: "Công ty giáo dục công nghệ\n đến từ Hàn Quốc",
      desc: "Công ty giáo dục công nghệ đến từ Hàn Quốc, chuyên đào tạo lập trình và phát triển năng lực số cho sinh viên, góp phần xây dựng nguồn nhân lực IT chất lượng cao.",
    },
    {
      logo: jobkoreaLogo,
      title: "Nền tảng tuyển dụng hàng đầu Hàn Quốc",
      desc: "Nền tảng tuyển dụng hàng đầu Hàn Quốc, kết nối hiệu quả giữa doanh nghiệp và ứng viên, đồng thời cung cấp các giải pháp nhân sự và dữ liệu thị trường lao động.",
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
              Đơn vị tổ chức & đối tác đồng hành
            </h2>
            <p className="mt-8 text-center text-base md:text-xl">
              Chúng tôi tuyển dụng đào tạo và kết nối nguồn nhân lực công nghệ
            </p>
          </div>
          <div className="mt-8 sm:mt-[60px]">
            <ul className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-2">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center justify-center space-y-3 p-[56px_16px] sm:p-[30px] rounded-[20px] border bg-[#FCFCFD] border-[#EFEEED] shadow-[0px_64px_64px_-48px_#0F0F0F1A]"
                >
                  <Image src={item.logo} alt="logo" className="mx-auto !mt-4" />
                  <h4 className="text-lg font-semibold whitespace-pre-line">
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
