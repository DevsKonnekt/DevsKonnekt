import Aside from "@/components/profile/aside";
import Details from "@/components/profile/details";
import { getProfile } from "@/lib/actions/profile.actions";
import { clerkClient, currentUser } from "@clerk/nextjs";

const ProfilePage = async ({ params }) => {
  const { id } = params;
  let user;
  let isCurrentUser = false;
  if (id) {
    user = await clerkClient.users.getUser(id[0]);
  } else {
    user = await currentUser();
    isCurrentUser = true;
  }
  const myProfile = await getProfile(user.publicMetadata.userId);
  return (
    <div className="pt-20 mx-auto w-full">
      <div className="flex justify-between items-start w-full">
        <Details
          isCurrentUser={isCurrentUser}
          user={user}
          profile={myProfile}
        />
        <div className="w-full lg:w-[400px] hidden lg:block">
          <Aside isCurrentUser={isCurrentUser} profile={myProfile} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
