const Benefits = () => {
  return (
    <section className="w-full md:px-auto px-4">
      <div className="flex flex-col w-full max-w-5xl justify-start items-start gap-4">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl font-black text-start  text-primary dark:text-background mb-2">
            Engage with Local Employers
          </h2>
          <p className="text-start  text-primary/80 dark:text-background/80 ">
            No more endless job hunting! Connect directly with local employers
            searching for top-notch developers like you. Grab a front-row seat
            to job opportunities and create a lasting impression.
          </p>
          <p className="text-start  text-primary/80 dark:text-background/80 ">
            Forge lasting connections with companies in your city. Our
            platform's mission is to bridge the gap between developers and local
            businesses seeking prime tech talent.
          </p>
          <p className="text-start  text-primary/80 dark:text-background/80 ">
            Say goodbye to the frustration of remote job applications. With our
            service, you'll have access to local job openings, making the
            process more personal and fruitful.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl font-black text-start text-primary dark:text-background mt-4 mb-2">
            For Employers: Find Your Tech Aces
          </h2>
          <p className="text-start  text-primary/80 dark:text-background/80 ">
            Discover the brightest tech talents in your city through our
            platform. Ditch the tedious task of sifting through countless
            resumes, and tap into a goldmine of the industry’s finest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
