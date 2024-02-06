import Header from "./header";
import Post from "./post";
import About from "./about";
import EditProfile from "./editProfile";
import { getPostsByUser } from "@/lib/actions/posts.actions";

const Details = async ({ user, profile }) => {
  const myPosts = await getPostsByUser(user.publicMetadata.userId);

  return (
    <div className="w-full flex flex-col items-start relative">
      <Header user={user} coverImage={profile?.coverImage} />
      <div className="absolute top-40 sm:top-[19rem] right-4 lg:right-auto lg:left-32 w-max">
        <EditProfile user={user} profile={profile} />
      </div>
      <div className="w-full hidden lg:flex justify-between items-start mt-2 px-4">
        {/* Left pane containing availability for hire and collaboration, Bio, socials, skills, etc */}
        <About profile={profile} />
        {/* Right pane containing posts */}
        <div className="hidden lg:flex flex-col gap-4 w-full">
          <Post posts={myPosts} />
        </div>
      </div>
    </div>
  );
};

export default Details;
