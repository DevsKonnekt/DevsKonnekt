"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const getPostsByUser = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/posts/author/${userId}/`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/posts/${postId}/`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getAllPosts = async ({
  searchParam,
  sortOrder,
  limit,
  page,
  sortField,
}) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/posts/?searchParam=${
        searchParam || ""
      }&sortOrder=${sortOrder || -1}&limit=${limit || 10}&page=${
        page || 1
      }&sortField=${sortField || "createdAt"}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const createPost = async ({ post, path }) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/posts/`,
      post
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const updatePost = async (postId, post) => {
  try {
    const response = await axios.put(
      `${process.env.BACKEND_URL}/posts/${postId}/`,
      post
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `${process.env.BACKEND_URL}/posts/${postId}/`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const bookmarkPost = async ({ postId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/bookmark/${postId}/${userId}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const unbookmarkPost = async ({ postId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/unbookmark/${postId}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getMyBookmarkedPosts = async ({
  userId,
  sortField,
  sortOrder,
  searchParam,
  page,
  limit,
}) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/posts/${userId}/bookmarks?searchParam=${
        searchParam || ""
      }&sortOrder=${sortOrder || -1}&limit=${limit || 10}&page=${
        page || 1
      }&sortField=${sortField || "createdAt"}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const upvotePost = async ({ postId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/upvote/${postId}/${userId}`
    );
    revalidatePath(`/forum`);
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const downvotePost = async ({ postId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/downvote/${postId}/${userId}`
    );
    revalidatePath(`/forum`);
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const commentOnPost = async ({ postId, userId, comment }) => {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/comments/`, {
      post: postId,
      author: userId,
      body: comment,
    });
    revalidatePath(`/forum`);
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const getCommentById = async (commentId) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/comments/${commentId}/`
    );
    return response.data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const commentOnComment = async ({ commentId, userId, comment }) => {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/comments/`, {
      body: comment,
      author: userId,
      comment: commentId,
    });
    revalidatePath("/posts");
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const upvoteComment = async ({ commentId, userId, voteType }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/comments/upvote/${commentId}/${userId}`,
      { voteType }
    );
    revalidatePath("/forum");
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const downvoteComment = async ({ commentId, userId, voteType }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/comments/downvote/${commentId}/${userId}`,
      { voteType }
    );
    revalidatePath("/forum");
    return response.data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const unbookmarkComment = async ({ commentId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/comments/unbookmark/${commentId}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const bookmarkComment = async ({ commentId, userId }) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/comments/bookmark/${commentId}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
