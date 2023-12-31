import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import About from "./about";
import { dummyPosts } from "./details";
import Post from "./post";
import Aside from "./aside";

const Header = ({
  firstName,
  lastName,
  username,
  coverImage,
  profileImage,
}) => {
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
              src={
                profileImage
                  ? profileImage
                  : "/images/profile/profilePlaceholder.avif"
              }
              alt="avatar"
              height={300}
              width={300}
              className="object-cover"
            />
          </Avatar>
          <div className="hidden lg:flex justify-between items-center w-full">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl text-primary font-bold">
                {firstName || lastName
                  ? `${firstName} ${lastName}`
                  : "John Doe"}
              </h1>
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
      <div className="flex flex-col justify-between items-center mt-12 px-4 lg:hidden">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl text-primary font-bold">
            {firstName || lastName ? `${firstName} ${lastName}` : "John Doe"}
          </h1>
          <span className="text-primary/60">(@johndoe)</span>
        </div>
        <div className="flex items-center justify-between mt-2 space-x-2 w-full">
          <button className="px-4 py-2 rounded-md bg-secondary text-background font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-primary/75 focus:ring-offset-2">
            Konnekt
          </button>
          <button className="px-4 py-2 rounded-md bg-primary text-background/80 font-medium hover:opacity-75 hover:scale-105 focus:ring-1 focus:ring-offset-secondary/75 focus:ring-offset-2">
            Chat
          </button>
        </div>
      </div>

      <Tabs
        defaultValue="about"
        className="w-full mt-4 bg-background lg:hidden"
      >
        <TabsList className="grid w-full grid-cols-3">
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
          <About
            linkedIn="https://www.linkedin.com/in//"
            facebook="https://www.facebook.com/"
            twitter="https://www.twitter.com/"
            instagram="https://www.instagram.com/"
            github="https://www.github.com/"
            portfolio="#"
          />
        </TabsContent>
        <TabsContent value="portfolio" className="px-4 py-2">
          <Aside />
        </TabsContent>
        <TabsContent value="posts" className="px-4 py-2">
          <Post posts={dummyPosts} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Header;
