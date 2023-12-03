import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Header = ({ firstName, lastName, username, coverImage, profileImage }) => {
  return (
    <div className="w-full relative">
      <div className="h-[300px] w-full rounded-lg">
        <Image
          src={`${coverImage ? coverImage : "/images/profile/coverPlaceholder.avif"}`}
          alt="cover"
          height={1080}
          width={1920}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute bottom-[-50px] left-0 px-4 transform w-full flex gap-4">
        <Avatar className="h-[100px] w-[100px] border-4 border-secondary/50 shadow-md block">
          <AvatarImage
            src={profileImage ? profileImage : "/images/profile/profilePlaceholder.avif"}
            alt="avatar"
            height={300}
            width={300}
            className="object-cover"
          />
        </Avatar>
        <div className="flex justify-between items-center -mt-10 w-full">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl text-primary font-bold">{firstName || lastName ? `${firstName} ${lastName}` : "John Doe"}</h1>
            <span className="text-primary/60">(@johndoe)</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-md bg-secondary text-background font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-primary/75 focus:ring-offset-2">
              Konnekt
            </button>
            <button className="px-4 py-2 rounded-md bg-background text-primary/80 font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-secondary/75 focus:ring-offset-2">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
