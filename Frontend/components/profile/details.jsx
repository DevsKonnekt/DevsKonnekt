import Header from "./header";
import PostsList from "./postsList";
import About from "./about";
import EditProfile from "./editProfile";
import { getPostsByUser } from "@/lib/actions/posts.actions";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { MoreVerticalIcon } from "lucide-react";
import Link from "next/link";

const Details = async ({ isCurrentUser, user, profile }) => {
  const posts = await getPostsByUser(profile?.user?._id);
  return (
    <div className="w-full flex flex-col items-start relative">
      <Header
        isCurrentUser={isCurrentUser}
        user={user}
        profile={profile}
        coverImage={profile?.coverImage}
      />
      {isCurrentUser && (
        <>
          <Menubar className="bg-secondary border-none absolute top-4 right-4 shadow-2xl">
            <MenubarMenu>
              <MenubarTrigger className=" bg-secondary/60 cursor-pointer text-primary focus:bg-secondary/60">
                <MoreVerticalIcon size={24} />
              </MenubarTrigger>
              <MenubarContent className="gap-4 dark:bg-gray-700">
                <MenubarItem>
                  <Link href={"/profile/event-tickets"}>
                    <p>My Event Tickets</p>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href={"/forum/bookmarks"}>
                    <p>Post Bookmarks</p>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href={"/forum/bookmarks/all"}>
                    <p>All Bookmarks</p>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </>
      )}
      <div className="w-full hidden lg:flex gap-12 justify-between items-start mt-2 px-4">
        {/* Left pane containing availability for hire and collaboration, Bio, socials, skills, etc */}
        <About isCurrentUser={isCurrentUser} profile={profile} />
        {/* Right pane containing posts */}
        <div className="hidden lg:flex flex-col gap-4 w-full">
          {posts?.length > 0 && (
            <PostsList
              isCurrentUser={isCurrentUser}
              posts={posts}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
