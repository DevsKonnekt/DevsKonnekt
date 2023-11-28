import Link from "next/link";

const CTA = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-6 py-8 px-4 bg-primary">
      <h1 className="text-3xl font-bold text-background text-center">
        Connect, Collaborate, and Learn with DevsKonnekt
      </h1>
      <p className="text-background text-center max-w-[609px]">
        What are you waiting for, O brave developer? Leap into knowledge and
        take your place among the elites of the coding realm. Go forth and
        conquer!
      </p>
      <Link
        href="/testimonials"
        className="primary-btn !text-primary !bg-background font-semibold hover:!bg-background/80 hover:!text-primary/80 sm:min-w-[411px]"
      >
        Explore Developer Stories
      </Link>
    </div>
  );
};

export default CTA;
