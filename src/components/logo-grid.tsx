import Image from "next/image";
import iuh from "/public/logos/IUH.svg";
import naver from "/public/logos/Naver.svg";
import shinhan from "/public/logos/Shinhan.svg";
import ueh from "/public/logos/UEH.svg";
import uit from "/public/logos/UIT.svg";
import ussh from "/public/logos/USSH.svg";

const logos = [
  {
    src: naver,
    alt: "naver",
  },
  {
    src: shinhan,
    alt: "shinhan",
  },
  {
    src: iuh,
    alt: "iuh",
  },
  {
    src: ussh,
    alt: "ussh",
  },
  {
    src: uit,
    alt: "uit",
  },
  {
    src: ueh,
    alt: "ueh",
  },
];

export default function LogoGrid() {
  return (
    <div className="container py-20">
      <h2 className="font-semibold text-sm text-gray-800 text-center">
        Đối tác của LIKELION
      </h2>
      <div className="mt-8 flex justify-center max-w-3xl mx-auto">
        <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8 md:gap-x-16 md:grid-cols-3">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
