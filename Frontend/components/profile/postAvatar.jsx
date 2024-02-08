import { Avatar, AvatarImage } from "../ui/avatar";

const PostAvatar = ({ avatar }) => {
  return (
    <Avatar className="border-2 border-secondary/60">
      <AvatarImage
        src={avatar}
        alt="profile image"
        className="object-cover w-full h-full rounded-lg"
      />
    </Avatar>
  );
};

export default PostAvatar;
