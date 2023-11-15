import Services from "@/components/servicesHero";
import Services1 from "./service1";
import Services2 from "./services2";
import Services3 from "./services3";
import Services4 from "./services4";
import Services5 from "./service5";
import Services6 from "./service6";
import CTA from "./cta";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-primary flex-col items-center justify-between px-4 sm:px-8 md:px-12 w-full">
    <Services/>
    <Services1/>
    <Services2/>
    <Services3/>
    <Services4/>
    <Services5/>
    <Services6/>
    <CTA/>
    </div>
  );
}
