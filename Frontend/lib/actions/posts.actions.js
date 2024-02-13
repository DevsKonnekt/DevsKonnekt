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

export const getAllPosts = async (
  searchParam,
  sortOrder,
  limit,
  page,
  sortField
) => {
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

export const bookmarkPost = async (postId) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/${postId}/bookmark`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const unbookmarkPost = async (postId) => {
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_URL}/posts/${postId}/unbookmark`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getBookmarkedPosts = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/posts/${userId}/bookmarks`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
