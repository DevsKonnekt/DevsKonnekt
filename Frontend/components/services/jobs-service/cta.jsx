import SignUpButton from "@/components/signUpButton";

const CTA = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-6 py-8 px-4 ">
      <h1 className="text-3xl font-bold text-secondary text-center">
        Discover Local <br className="hidden sm:block" />
        Employers & Top Talent
      </h1>
      <p className="text-center max-w-[609px]">
        Find the perfect match for your projects and ace every development
        challenge. Developers, meet local talent seekers and grab your
        well-deserved dream job. Employers, get access to a curated pool of top
        tech talent. The possibilities are endless!
      </p>
      <SignUpButton variant={"secondary"} title={"Get Started Now"} />
    </div>
  );
};

export default CTA;
