import Image from "next/image";
import EnvelopeIcon from "/public/EnvelopeIcon.svg";
import PhoneCallIcon from "/public/PhoneCallIcon.svg";

export default function Contact() {
  const contactMethods = [
    {
      icon: PhoneCallIcon,
      contact: "(+84) 86 713 3779",
      title: "Phone",
    },
    {
      icon: EnvelopeIcon,
      contact: "recruitment@likelion.net",
      title: "Email",
    },
  ];

  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">Liên hệ</h2>
        </div>
        <div>
          <ul className="mt-4 sm:mt-8 flex flex-col items-center gap-y-2 sm:gap-y-4">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-x-3 justify-center"
              >
                <h4 className="sr-only text-xl font-medium">{item.title}</h4>
                <div className="mt-2 flex gap-x-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-[30px] h-[30px] object-cover rounded-lg"
                  />
                  <p>{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
