import Benefits from '@/components/benefits';
import NavBar from '../components/NavBar';
import Main from '../components/hero';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <Benefits />
    </div>
  )

import Features from "@/components/features";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-12 w-full">
      <Services />
      <Features />
    </main>
  );
}
