import Aside from "@/components/profile/aside";
import Details from "@/components/profile/details";
import { getProfile } from "@/lib/actions/profile.actions";
import { clerkClient, currentUser } from "@clerk/nextjs";

const ProfilePage = async ({ params }) => {
  const { id } = params;
  const userFromParams = await clerkClient.users.getUser(id[0]);
  const me = await currentUser();
  const isCurrentUser = userFromParams.id === me.id;
  const myProfile = await getProfile(userFromParams.publicMetadata.userId);
  return (
    <div className="pt-20 mx-auto w-full">
      <div className="flex justify-between items-start w-full">
        <Details
          isCurrentUser={isCurrentUser}
          user={userFromParams}
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
