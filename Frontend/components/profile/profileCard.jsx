import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";

const ProfileCard = ({ profile }) => {
  return (
    <Link href={`/profile/${profile?.clerkId}`}>
      <div className="w-full flex gap-4 items-center justify-start max-w-xl">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage
            src={profile?.profilePicture}
            alt="profile image"
            className="object-cover w-full h-full rounded-lg"
          />
        </Avatar>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-start">
            {profile?.firstName} {profile?.lastName}
          </h2>
          <p className="text-start">{profile?.profile?.jobTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
