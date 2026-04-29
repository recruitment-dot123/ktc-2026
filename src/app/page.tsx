import AboutUs from "@/components/about-us";
import Advantage from "@/components/advantage";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import ImageGallery from "@/components/image-gallery";
import Onboarding from "@/components/onboarding";
import Organization from "@/components/organization";
import Participant from "@/components/participants";
import PositionApplied from "@/components/positionApplied";
import Process from "@/components/process";
import TrainingProgram from "@/components/training-program";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Organization />
      <Advantage />
      <Participant />
      <PositionApplied />
      <Benefits />
      <Process />
      <TrainingProgram />
      <Onboarding />
      <ImageGallery />
      <FAQ />
      <Contact />
    </div>
  );
}
