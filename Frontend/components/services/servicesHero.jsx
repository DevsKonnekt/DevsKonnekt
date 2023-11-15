import Image from "next/image";

function Services() {
  return (
    <main
      className="w-full min-h-screen flex bg-blue-200 flex-col gap-4 justify-between items-center pt-36 px-4 sm:pt-24 md:pt-0 md:px-12 md:flex-row"
    >
      <span className="spacer"></span>
      <div className="mb-14 lg:mb-0 md:w-1/2 flex-1 w-full">
        <h1 className="text-5xl leading-none text-primary font-extrabold lg:text-3xl sm:text-lg text-start lg:leading-tight mb-5 sm:pt-14 sm:mb-12">
          Unleash Your <br className="hidden sm:block" />
          Potential <br className="hidden sm:block" />
        </h1>

        <div className="flex justify-start items-center mt-16">
          <button className="text-background text-base sm:text-lg border border-secondary bg-secondary transition-all duration-500 font-medium rounded-lg px-6 py-1 w-[150px] sm:w-auto text-center hover:bg-background hover:border-primary hover:text-primary">
            Join Us
          </button>
          <button className="text-primary sm:text-lg bg-background transition-all duration-500 font-medium rounded-lg border border-primary px-6 py-1 ml-4 w-[150px] sm:w-auto text-center hover:bg-secondary hover:border-secondary hover:text-background lg:text-sm xl:text-base">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 w-full md:w-1/2 flex flex-col items-center">
        <div className="bg-blue-950 w-full h-full flex-1" />
        <div className="flex justify-between">
          <div className="flex-1 w-full md:w-1/2">
            <Image
              src="/developer-hands.png"
              alt="Happy developers sitting on a table"
              width={400}
              height={600}
              className="object-cover w-full"
              style={{
                borderTopLeftRadius: "40px",
                borderTopRightRadius: "200px",
                borderBottomRightRadius: "40px",
                borderBottomLeftRadius: "40px",
              }}
            />
            <div className="relative w-40 h-28 bg-blue-950 rounded-full p-4 mt-8" style={{ height: "250px", width:"250px" }}>
        </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: "rotate(-130deg)",
                transformOrigin: "0 0",
                borderRadius: 500,
                border: "1px #06142F solid",
              }}
            />
          </div>
          <span className="spacer"></span>
          <div className="w-1/2">
            <Image
              src="/tall-building.png"
              alt="Happy developers sitting on a table"
              width={200}
              height={800}
              className="object-cover w-full"
              style={{
                borderTopLeftRadius: "40px",
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                borderBottomLeftRadius: "40px",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;