import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Project = ({ project }) => {
  return (
    <Card className="rounded-lg bg-background shadow shadow-primary p-0 relative">
      <Image
        src={project?.image || "/images/profile/projectPlaceholder.avif"}
        alt={project?.title}
        height={1080}
        width={1920}
        className="object-cover w-full rounded-lg"
      />
      <CardContent className="space-y-2">
        <CardTitle className="text-xl font-semibold text-start mt-4">
          {project?.title}
        </CardTitle>
        <CardDescription className="text-start text-primary/75 line-clamp-1">
          {project?.description}
        </CardDescription>
        <Link
          href={project?.link}
          target="_blank"
          className="absolute bottom-12 right-4 text-2xl text-secondary rounded-bl-lg rounded-tr-lg px-4 py-1"
        >
          <FaExternalLinkAlt />
        </Link>
      </CardContent>
    </Card>
  );
};

export default Project;
