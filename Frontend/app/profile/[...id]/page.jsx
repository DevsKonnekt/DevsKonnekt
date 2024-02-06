import Aside from "@/components/profile/aside";
import Details from "@/components/profile/details";

export const dummyProjects = [
  {
    id: 1,
    title: "DevsKonnekt",
    description: "A social media platform for developers",
    image: "/images/profile/projectPlaceholder.avif",
    link: "#",
    author: {
      id: 1,
      name: "Takudzwa",
      avatar: "/images/profile/profilePlaceholder.avif",
    },
    createdAt: "2021-10-10T00:00:00.000Z",
    updatedAt: "2021-10-10T00:00:00.000Z",
  },
  {
    id: 2,
    title: "ExploreEz",
    description: "A travel companion mobile app",
    image: "/images/profile/projectPlaceholder.avif",
    link: "#",
    author: {
      id: 1,
      name: "Takudzwa",
      avatar: "/images/profile/profilePlaceholder.avif",
    },
    createdAt: "2021-10-10T00:00:00.000Z",
    updatedAt: "2021-10-10T00:00:00.000Z",
  },
  {
    id: 3,
    title: "SmartMeals",
    description: "A food delivery mobile app",
    image: "/images/profile/projectPlaceholder.avif",
    link: "#",
    author: {
      id: 1,
      name: "Takudzwa",
      avatar: "/images/profile/profilePlaceholder.avif",
    },
    createdAt: "2021-10-10T00:00:00.000Z",
    updatedAt: "2021-10-10T00:00:00.000Z",
  },
  {
    id: 4,
    title: "ShopEazy",
    description: "An ecommerce web app",
    image: "/images/profile/projectPlaceholder.avif",
    link: "#",
    author: {
      id: 1,
      name: "Takudzwa",
      avatar: "/images/profile/profilePlaceholder.avif",
    },
    createdAt: "2021-10-10T00:00:00.000Z",
    updatedAt: "2021-10-10T00:00:00.000Z",
  },
];

const ProfilePage = async () => {
  return (
    <div className="pt-20 mx-auto w-full">
      <div className="flex justify-between items-start w-full">
        <Details />
        <div className="w-full lg:w-[400px] hidden lg:block">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
