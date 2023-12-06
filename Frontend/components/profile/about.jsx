import Link from "next/link";
import React from "react";
import { BiGlobe, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = ({
  linkedIn,
  facebook,
  instagram,
  twitter,
  github,
  portfolio,
}) => {
  return (
    <div className="w-full lg:w-[35%] flex flex-col gap-4 mt-4 lg:mt-16 px-4">
      {/* Title and availability for hire and collaboration */}
      <div className="flex flex-col justify-between items-start w-full">
        <h1 className="text-2xl text-primary font-bold">FullStack Developer</h1>
        <h2 className="text-xl mt-4 text-primary font-semibold">
          Availability
        </h2>
        <div className="flex items-start mt-2 gap-4">
          <p className=" flex gap-2 items-center font-medium">
            <span className="w-2 h-2 bg-red-600 rounded-full" /> Hire
          </p>
          <p className=" flex gap-2 items-center font-medium">
            <span className="w-2 h-2 bg-green-600 rounded-full" /> Collaboration
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className="flex flex-col justify-between items-start w-full -mt-2">
        <h2 className="text-xl mt-4 text-primary font-semibold">Bio</h2>
        <p className="text-primary/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatem, quia, voluptatum, quidem nemo voluptate dolorum
          accusantium quod voluptates quibusdam autem? Quisquam, quibusdam
          voluptatem. Quisquam, quibusdam voluptatem.
        </p>
      </div>
      {/* Location */}
      <div className="flex items-center gap-2 w-full font-semibold text-md">
        <FaMapMarkerAlt className="text-primary/70" />
        <p className="text-primary/80">Gokwe, Zimbabwe</p>
      </div>
      {/* Socials */}
      <div className="flex w-full justify-between items-center gap-2">
        <Link href={`${facebook ? facebook : "#"}`} target="_blank">
          <BiLogoFacebook className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
        <Link href={`${instagram ? instagram : "#"}`} target="_blank">
          <BiLogoInstagram className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
        <Link href={`${twitter ? twitter : "#"}`} target="_blank">
          <BiLogoTwitter className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
        <Link href={`${linkedIn ? linkedIn : "#"}`} target="_blank">
          <BiLogoLinkedin className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
        <Link href={`${github ? github : "#"}`} target="_blank">
          <BiLogoGithub className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
        <Link href={`${portfolio ? portfolio : "#"}`} target="_blank">
          <BiGlobe className="text-primary/70 cursor-pointer text-2xl" />
        </Link>
      </div>
      {/* Skills */}
      <div className="flex flex-col justify-between items-start w-full">
        <h2 className="text-xl mt-4 text-primary font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            React
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            NextJS
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            NodeJS
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            ExpressJS
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            MongoDB
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            PostgreSQL
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            GraphQL
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            Apollo
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            TailwindCSS
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            ChakraUI
          </span>
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary/80 font-medium">
            MaterialUI
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
