import Link from "next/link";

function CTA() {
  return (
    <section className="w-full bg-background py-8 flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl text-primary font-bold mb-4">Join Today</h1>
      <p className="text-primary text-center max-w-lg overflow-hidden line-clamp-4 mt-8">
        Get instant access to all of our amazing features! Start collaborating
        and growing with an incredibly supportive community.
      </p>
      <Link
        href="/signup"
        className="primary-btn mt-4 sm:w-[256px] font-semibold"
      >
        Learn More
      </Link>
    </section>
  );
}

export default CTA;
