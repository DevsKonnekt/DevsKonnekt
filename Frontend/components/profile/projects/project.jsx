import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardTitle } from "../../ui/card";
import { BiLogoGithub } from "react-icons/bi";

const Project = ({ project }) => {
  return (
    <Card className="rounded-lg bg-background shadow shadow-primary p-0 group relative transition-all duration-500 ease-linear">
      <Image
        src={
          project?.imageUrl
            ? project?.imageUrl
            : "/images/profile/projectPlaceholder.avif"
        }
        alt={project?.name}
        height={250}
        width={300}
        className="object-cover w-full rounded-lg"
      />
      <CardContent className="space-y-2 absolute top-0 left-0 hidden bg-primary/55 flex-col items-center justify-center group-hover:flex h-full w-full">
        <CardTitle className="text-xl text-background font-semibold text-start mt-4 flex items-center justify-between gap-4 w-full">
          {project?.name}
          <Link
            href={project?.githubUrl}
            target="_blank"
            className="text-2xl px-4 py-1"
          >
            <BiLogoGithub />
          </Link>
        </CardTitle>
        <CardDescription className="flex gap-8 items-center justify-between h-full">
          <p className="text-start text-background/75 line-clamp-4 w-3/4">
            {project?.description}
          </p>
          <Link
            href={project?.liveUrl ? project?.liveUrl : "#"}
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
