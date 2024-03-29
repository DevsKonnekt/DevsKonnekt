import ForumPostsList from "@/components/community/forum/forumPostsList";
import PostsSort from "@/components/community/forum/postsSort";
import Search from "@/components/shared/search";
import { getMyBookmarkedPosts } from "@/lib/actions/posts.actions";
import { currentUser } from "@clerk/nextjs";

const Forum = async ({ searchParams }) => {
  const searchParam = searchParams?.search || "";
  const sortOrder = searchParams?.sortOrder || -1;
  const sortField = searchParams?.sortField || "createdAt";
  const user = await currentUser();

  const posts = await getMyBookmarkedPosts({
    userId: user?.publicMetadata?.userId,
    searchParam,
    sortOrder,
    sortField,
  });
  return (
    <div className="w-full max-w-[100vw] flex flex-col gap-4 pt-32 px-4 md:px-8 xl:px-12">
      <div className="flex justify-between items-center">
        <h1 className="hidden sm:block text-2xl font-bold">
          My Bookmarked Posts
        </h1>
        <Search
          path={"forum/bookmarks"}
          search={searchParam}
          field={sortField}
          order={sortOrder}
        />
        <PostsSort
          path="forum/bookmarks"
          search={searchParam}
          field={sortField}
          order={sortOrder}
        />
      </div>
      <ForumPostsList
        initialPosts={posts}
        search={searchParam}
        sortField={sortField}
        sortOrder={sortOrder}
        type={"allPosts"}
      />
    </div>
  );
};

export default Forum;
