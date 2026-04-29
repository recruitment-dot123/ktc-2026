import AnimationLayout from "./shared/animation-layout";

const applySteps = [
  {
    title: "Sàng lọc hồ sơ",
    description: "CV sceening & Test lập trình",
  },
  {
    title: "Phỏng vấn sơ bộ",
    description: "Trao đổi nhanh để hiểu rõ kỹ năng & định hướng của ứng viên",
  },
  {
    title: "Kết nối trực tiếp với Doanh nghiệp",
    description: "Kết nối → Phỏng vấn → Nhận offer → Onboarding",
  },
  {
    title: "Đào tạo kỹ năng mềm",
    description:
      "Tham gia lớp đào tạo kỹ năng mềm và onboarding sau khi nhận offer",
  },
];

export default function Process() {
  return (
    <AnimationLayout
      className="duration-1000 delay-300"
      isInviewState={{
        trueState: "opacity-1",
        falseState: "opacity-0",
      }}
    >
      <div className="container py-[40px] md:py-[120px]">
        <div className="mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">Hành trình K-Tech College 2025</h2>
          <p className="mt-8 text-center text-base md:text-xl">
            Quy trình ứng tuyển sẽ như thế nào?
          </p>
        </div>

        <div className="mt-8 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applySteps.map((item, idx) => (
            <div
              key={idx}
              className="h-full bg-[#FCFCFD] border border-[#E5E5E5] rounded-[20px] p-[32px_16px] flex flex-col items-center text-center shadow-[0px_64px_64px_-48px_#0F0F0F1A]"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center mb-6">
                <span className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FDA4AF] to-[#3B82F6] leading-none">
                  {`0${idx + 1}`}
                </span>
              </div>
              <h4 className="font-bold text-lg text-pink-500 md:text-xl mb-2">
                {item.title}
              </h4>
              <p className="text-[#7B7B8C] text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimationLayout>
  );
}
