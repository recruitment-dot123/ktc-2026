import { Suspense } from "react";
import RegisterForm from "../../components/forms/register-form";

export default function page() {
  return (
    <section
      id="dang-ky"
      className="relative mt-[48px] md:mt-[74px] py-14 bg-[#101416]"
    >
      <div className="relative z-10 container">
        <div className="max-w-xl space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Ứng tuyển K-tech College 2025
          </h2>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xl">
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
