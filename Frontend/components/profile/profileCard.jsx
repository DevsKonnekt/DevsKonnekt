import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const ProfileCard = ({ profile }) => {
  return (
    <div className="w-full flex gap-4 items-center justify-between max-w-2xl ">
      <Link
        href={`/profile/${profile?.clerkId}`}
        className="w-full flex gap-4 items-center"
      >
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage
            src={profile?.profilePicture}
            alt="profile image"
            className="object-cover w-full h-full rounded-lg"
          />
        </Avatar>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg font-semibold tracking-wider text-start">
            {profile?.firstName} {profile?.lastName}
          </h2>
          <p className="text-start">{profile?.profile?.jobTitle}</p>
        </div>
      </Link>
      <Button
        variant="outline"
        size="sm"
        className="border-primary justify-self-end"
      >
        Konnekt
      </Button>
    </div>
  );
};

export default ProfileCard;
