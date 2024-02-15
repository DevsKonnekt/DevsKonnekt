"use client";

import { useUser } from "@clerk/nextjs";
import CreatePost from "../posts/createPost";
import Post from "../profile/post";
import { useInView } from "react-intersection-observer";
import { SpinnerCircular } from "spinners-react";
import { useEffect, useState } from "react";
import { getAllPosts, getPostsByUser } from "@/lib/actions/posts.actions";
import { revalidatePath } from "next/cache";

const ForumPostsList = ({
  initialPosts,
  search,
  sortField,
  sortOrder,
  type,
}) => {
  const { isSignedIn, user } = useUser();
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(true);

  async function loadMorePosts() {
    const next = page + 1;
    let newPosts;
    type === "allPosts"
      ? (newPosts = await getAllPosts({
          page: next,
          searchParam: search,
          sortField,
          sortOrder,
        }))
      : type === "userPosts"
      ? (newPosts = await getPostsByUser({
          page: next,
          searchParam: search,
          sortField,
          sortOrder,
        }))
      : (newPosts = await getMyBookmarkedPosts({
          page: next,
          searchParam: search,
          sortField,
          sortOrder,
        }));

    if (newPosts.length > 0) {
      setPage(next);
      setPosts((prev) => [...(prev?.length > 0 ? prev : []), ...newPosts]);
      revalidatePath("/forum");
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  useEffect(() => {
    setPosts(initialPosts);
    setPage(1);
    setLoading(true);
  }, [search, sortField, sortOrder, initialPosts]);

  return (
    <div className="w-full flex flex-col gap-4 lg:mt-16 md:px-4">
      {isSignedIn && (
        <div className="w-max fixed right-4 bottom-4">
          <CreatePost userId={user.publicMetadata.userId} />
        </div>
      )}
      <ul
        key={Math.random()}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        {posts.map((post) => (
          <li key={post._id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <div
        ref={ref}
        className="w-full flex items-center justify-center mx-auto mt-4"
      >
        {inView && loading && <SpinnerCircular color="#1F63ED" />}
      </div>
    </div>
  );
};

export default ForumPostsList;
