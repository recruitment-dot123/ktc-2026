import RegisterForm from "../../components/forms/register-form";

export default function page() {
  return (
    <section
      id="dang-ky"
      className="relative mt-[48px] md:mt-[74px] py-14 bg-[#101416]"
    >
      <div>
        <div className="relative z-10 container">
          <div className="max-w-xl space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <h2 className="text-white text-3xl font-semibold sm:text-4xl">
              {/* Thời gian ứng tuyển đã kết thúc. */}
              Ứng tuyển K-tech College 2025
            </h2>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xl">
            <RegisterForm />
          </div>
        </div>
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </div>
    </section>
  );
}
