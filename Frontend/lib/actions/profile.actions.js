"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const getProfile = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/profiles/${userId}/`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const updateMyProfile = async (userId, profile) => {
  try {
    const response = await axios.put(
      `${process.env.BACKEND_URL}/profiles/${userId}/`,
      profile
    );
    revalidatePath("/profiles/[...id]/page");
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getAllProfiles = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/profiles/`);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
