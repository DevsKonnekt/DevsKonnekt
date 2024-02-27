/* eslint-disable no-undef */
"use server";

import axios from "axios";

export const createUser = async (user) => {
  try {
    const response = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.BACKEND_URL}/users/`,
      user,
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export async function updateUser(clerkId, user) {
  try {
    const response = await axios.put(
      // eslint-disable-next-line no-undef
      `${process.env.BACKEND_URL}/users/${clerkId}/`,
      user,
    );
    const updatedUser = response.data;
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
}

export async function deleteUser(clerkId) {
  try {
    const response = await axios.delete(
      `${process.env.BACKEND_URL}/users/${clerkId}/`,
    );
    const deletedUser = response.data;
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
}
