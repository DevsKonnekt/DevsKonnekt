import SignUpButton from "@/components/signUpButton";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 md:px-8 gap-6 mt-10">
      <h2 className="text-4xl font-black text-secondary mt-4 text-center">
        Ready, Set, Join!
      </h2>
      <p className="text-center font-medium max-w-3xl">
        Seize the opportunity to become a part of an extraordinary network of
        developers. Don&#39;t miss out, your perfect job, mentor, or project is
        just a click away.
      </p>
      <SignUpButton variant="secondary" title="Get Started" />
    </section>
  );
};

export default CTA;
