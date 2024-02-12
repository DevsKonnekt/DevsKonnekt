import ProfileCard from "./profileCard";

const ProfilesList = ({ profiles }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfilesList;
