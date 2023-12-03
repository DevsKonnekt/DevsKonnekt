import Achievements from "@/components/profile/achievements";
import AsideContent from "@/components/profile/asideContent";
import Details from "@/components/profile/details";

const dummyProjects = [
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

const ProfilePage = () => {
  return (
    <div className="max-w-7xl pt-24 mx-auto w-full">
      <div className="flex flex-col md:flex-roe justify-between items-start">
        <Details />
        <aside className="w-full md:w-[400px] h-full pb-8 px-4 pt-2 border-[0.5px] shadow-lg ml-2 rounded">
          <Achievements />
          <AsideContent projects={dummyProjects} />
        </aside>
      </div>
    </div>
  );
};

export default ProfilePage;
