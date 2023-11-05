import Features from "@/components/features";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Services />
      <Features />
    </main>
  )
}
