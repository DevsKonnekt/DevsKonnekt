import SignUpButton from "@/components/signUpButton";

const CTA = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-6 py-8 px-4 bg-secondary">
      <h1 className="text-3xl font-bold text-background text-center">
        Ready to flex your coding muscles?
      </h1>
      <p className="text-background text-center max-w-[609px]">
        You’ve got the skills; now put them to the test. Prepare for the
        fiercest coding duels and battle your way up the ranks. Unmask your
        inner coder and boldly claim your place among the greats.
      </p>
      <SignUpButton variant={"default"} title={"Get Started"} />
    </div>
  );
};

export default CTA;
