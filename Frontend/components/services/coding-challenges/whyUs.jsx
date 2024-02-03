import SignUpButton from "@/components/signUpButton";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-center px-4 sm:px-6 md:px-8 py-8 mb-4 min-h-screen h-[120vh] sm:h-screen relative">
      <Image
        src="/images/services/connect/4.jpeg"
        alt="hero"
        width={500}
        height={500}
        className="absolute object-cover top-0 left-0 w-full h-full"
      />
      <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-10 bg-primary/80 px-4 sm:px-6 md:px-8">
        <h1 className="text-background font-bold text-3xl md:text-5xl text-start w-full max-w-4xl mx-auto leading-10 mb-4">
          Why Choose Us for <br className="hidden sm:block mb-2" />
          Your Code Battle?
        </h1>
        <p className="text-background font-normal text-start max-w-4xl mx-auto mt-4">
          Join a thriving network of coders, ranging from seasoned pros to
          ambitious newbies, all hungry to learn, compete, and rise up the
          ranks.
        </p>
        <p className="text-background font-normal text-start max-w-4xl mx-auto mt-4">
          Experience the ultimate platform specifically designed for developers.
          Sharpen your skills, learn new technologies, and conquer coding
          challenges with the support from our diverse and passionate community.
        </p>
        <p className="text-background font-normal text-start max-w-4xl mx-auto mt-4">
          Not just for competing, our platform provides you with opportunities
          to connect with local employers, explore job openings, and upgrade
          your career.
        </p>
        <p className="text-background font-normal text-start max-w-4xl mx-auto my-4">
          Our large database of challenges, along with mentors and events to
          guide your journey, makes sure that you're always equipped with the
          resources you need to succeed. Get inspired by passionate mentors,
          knowledge-sharing peers, and exciting developer events happening in
          your city. Don't miss out on the action!
        </p>
        <SignUpButton variant="secondary" title="Get Me Started" />
      </div>
    </section>
  );
};

export default WhyUs;
