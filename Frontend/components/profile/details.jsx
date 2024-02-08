import Header from "./header";
import PostsList from "./postsList";
import About from "./about";
import EditProfile from "./editProfile";
import { getPostsByUser } from "@/lib/actions/posts.actions";

const Details = async ({ user, profile }) => {
  const posts = await getPostsByUser(profile?.user?._id);
  return (
    <div className="w-full flex flex-col items-start relative">
      <Header user={user} profile={profile} coverImage={profile?.coverImage} />
      <div className="absolute top-40 sm:top-[19rem] right-4 lg:right-auto lg:left-32 w-max">
        <EditProfile />
      </div>
      <div className="w-full hidden lg:flex gap-12 justify-between items-start mt-2 px-4">
        {/* Left pane containing availability for hire and collaboration, Bio, socials, skills, etc */}
        <About profile={profile} />
        {/* Right pane containing posts */}
        <div className="hidden lg:flex flex-col gap-4 w-full">
          {posts?.length > 0 && <PostsList posts={posts} />}
        </div>
      </div>
    </div>
  );
};

export default Details;
