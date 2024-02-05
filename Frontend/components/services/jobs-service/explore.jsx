const Explore = () => {
  return (
    <section className="w-full my-8 md:px-auto px-4">
      <h2 className="text-3xl font-black text-start sm:text-center">
        Explore untapped job opportunities.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center mt-6 pt-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 w-full sm:w-1/3">
          <h3 className="text-5xl  font-black text-center sm:text-start">
            500+
          </h3>
          <p className=" text-center sm:text-start text-secondary font-bold text-xl">
            Top Local Employers
          </p>
        </div>
        <p className="text-start w-full sm:w-2/3">
          Finding your dream job has never been this easy – connect with the
          finest local employers in no time! We have the crème de la crème of
          the tech world, from hotshot startups to industry titans like Google
          and Amazon. Jump on the opportunity to make a lasting connection that
          skyrocket your career!
        </p>
      </div>
    </section>
  );
};

export default Explore;
