import SignUpButton from "../signUpButton";

function CTA() {
  return (
    <section className="w-full bg-background dark:bg-gray-700 py-8 flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl font-bold mb-4">Join Today</h1>
      <p className="text-center max-w-lg overflow-hidden line-clamp-4 mt-8">
        Get instant access to all of our amazing features! Start collaborating
        and growing with an incredibly supportive community.
      </p>
      <SignUpButton variant="secondary" title="Get Access" />
    </section>
  );
}

export default CTA;
