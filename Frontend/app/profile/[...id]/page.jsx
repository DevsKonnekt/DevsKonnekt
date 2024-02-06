import Aside from "@/components/profile/aside";
import Details from "@/components/profile/details";
import { getProfile } from "@/lib/actions/profile.actions";
import { currentUser } from "@clerk/nextjs";

const ProfilePage = async () => {
  const user = await currentUser();
  const myProfile = await getProfile(user.publicMetadata.userId);
  return (
    <div className="pt-20 mx-auto w-full">
      <div className="flex justify-between items-start w-full">
        <Details user={user} profile={myProfile} />
        <div className="w-full lg:w-[400px] hidden lg:block">
          <Aside profile={myProfile} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
