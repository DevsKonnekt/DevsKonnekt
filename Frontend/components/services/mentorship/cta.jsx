import Arrow from "./arrow";
import SignUpButton from "@/components/signUpButton";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 md:px-8 gap-6 mt-10">
      <Arrow />
      <h2 className="text-3xl font-bold text-secondary mt-4 text-center">
        Ready to Find Your Code Whisperer?
      </h2>
      <p className="text-center max-w-3xl">
        Join the ultimate developer platform today! Elevate your coding skills
        or pass on your coding knowledge to the next generation. Either way,
        we&#39;ve got your back!
      </p>
      <SignUpButton title={"Get Started Now"} />
    </section>
  );
};

export default CTA;
