import {
  Home,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";

const RightSidebar = () => {
  return (
    <div className="hidden lg:flex h-full flex-col gap-8 items-start justify-start pt-10">
      <Link
        href={"/"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <Home size={32} />
        Home
      </Link>
      <Link
        href={"#"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <LayoutDashboardIcon size={32} />
        Dashboard
      </Link>
      <Link
        href={"#"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <User2Icon size={32} />
        Profile
      </Link>
      <Link
        href={"#"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <MessageSquareIcon size={32} />
        Chats
      </Link>
      <Link
        href={"#"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <MdLeaderboard size={32} />
        LeaderBoard
      </Link>
      <Link
        href={"#"}
        className="flex gap-2 items-center text-xl font-semibold text-primary/70 hover:text-primary"
      >
        <SettingsIcon size={32} />
        Settings
      </Link>
    </div>
  );
};

export default RightSidebar;
