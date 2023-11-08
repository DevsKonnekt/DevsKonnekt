import CTA from "@/components/cta";
import Features from "@/components/features";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-12 w-full">
      <Services />
      <Features />
      <CTA />
    </main>
  );
}
