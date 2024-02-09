import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardTitle } from "../../ui/card";
import { BiLogoGithub } from "react-icons/bi";

const Project = ({ project }) => {
  return (
    <Card className="rounded-lg bg-background shadow shadow-primary p-0 group relative">
      <Image
        src={project?.image}
        alt={project?.title}
        height={1080}
        width={1920}
        className="object-cover w-full rounded-lg"
      />
      <CardContent className="space-y-2 absolute top-0 left-0 hidden bg-secondary/45 flex-col items-center justify-center group-hover:flex">
        <CardTitle className="text-xl font-semibold text-start mt-4 flex items-center justify-between gap-4">
          {project?.title}
          <Link
            href={project?.githubLink}
            target="_blank"
            className="text-2xl px-4 py-1"
          >
            <BiLogoGithub />
          </Link>
        </CardTitle>
        <CardDescription className="flex gap-8 items-start justify-between">
          <p className="text-start text-primary/75 line-clamp-1 w-3/4">
            {project?.description}
          </p>
          <Link
            href={project?.liveLink}
            target="_blank"
            className="text-2xl text-secondary rounded-bl-lg rounded-tr-lg px-4 py-1 w-1/4"
          >
            <FaExternalLinkAlt />
          </Link>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Project;
