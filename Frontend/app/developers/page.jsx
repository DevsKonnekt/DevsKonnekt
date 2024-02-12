import ProfilesList from "@/components/profile/profilesList";
import { getAllProfiles } from "@/lib/actions/profile.actions";

const DeveloperProfiles = async () => {
  const developers = await getAllProfiles();
  return (
    <div className="pt-24 px-4 w-full min-h-screen">
      <ProfilesList profiles={developers} />
    </div>
  );
};

export default DeveloperProfiles;
