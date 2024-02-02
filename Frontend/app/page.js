import CTA from "@/components/cta";
import Benefits from "@/components/benefits";
import Main from "../components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import MovingTextSection from "@/components/motion";
import MovingSection from "@/components/motionsection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full">
      <Main />
      <MovingTextSection />
      <Stats />
      <Services />
      <Features />
      <Testimonials />
      <MovingSection />
      <Benefits />
      <CTA />
    </div>
  );
}
