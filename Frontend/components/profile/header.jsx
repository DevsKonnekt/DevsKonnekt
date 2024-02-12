import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import About from "./about";
import Aside from "./aside";
import PostsList from "./postsList";
import { getPostsByUser } from "@/lib/actions/posts.actions";

const Header = async ({ isCurrentUser, user, profile, coverImage }) => {
  const posts = await getPostsByUser(profile?.user?._id);
  return (
    <>
      <div className="w-full relative">
        <div className="h-[150px] md:h-[300px] w-full rounded-lg">
          <Image
            src={`${
              coverImage ? coverImage : "/images/profile/coverPlaceholder.avif"
            }`}
            alt="cover"
            height={1080}
            width={1920}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="absolute bottom-[-50px] left-0 px-4 w-full flex items-start gap-4">
          <Avatar className="h-[100px] w-[100px] border-4 border-secondary/50 shadow-md block">
            <AvatarImage
              src={user?.imageUrl}
              alt="avatar"
              height={300}
              width={300}
              className="object-cover"
            />
          </Avatar>
          <div className="hidden lg:flex justify-between items-center w-full">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl  font-bold">
                {user.firstName} {user?.lastName && user.lastName}
              </h1>
              <span className="opacity-50">(@{user.username})</span>
            </div>
            {!isCurrentUser && (
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-md bg-background text-primary/80  font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-secondary/75 focus:ring-offset-2">
                  Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center mt-16 px-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl  font-bold">
            {user.firstName} {user?.lastName && user.lastName}
          </h1>
          <span className="opacity-50">(@{user.username})</span>
        </div>
        {!isCurrentUser && (
          <div className="flex items-center justify-between mt-2 space-x-2 w-full">
            <button className="px-4 py-2 rounded-md bg-primary text-background font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-secondary/75 focus:ring-offset-2">
              Chat
            </button>
          </div>
        )}
      </div>

      <Tabs
        defaultValue="about"
        className="w-full mt-8 bg-background dark:bg-gray-700 lg:hidden"
      >
        <TabsList className="grid w-full grid-cols-3 bg-background dark:bg-gray-700 border-b-2 border-b-primary place-content-center">
          <TabsTrigger value="about" className="font-bold text-xl">
            About
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="font-bold text-xl">
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="posts" className="font-bold text-xl">
            Posts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="px-4 py-2">
          <About profile={profile} />
        </TabsContent>
        <TabsContent value="portfolio" className="px-4 py-2">
          <Aside profile={profile} />
        </TabsContent>
        <TabsContent value="posts" className="px-4 py-2 relative">
          {posts?.length > 0 ? (
            <PostsList posts={posts} user={user} />
          ) : (
            <p>No posts yet</p>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Header;
