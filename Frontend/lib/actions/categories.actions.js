"use server";

import axios from "axios";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/categories`);
    console.log(data);
    return data;
  } catch (error) {
    typeof error === "string" ? error : error?.response?.data?.message;
  }
};

export const getCategory = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/categories/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};

export const createCategory = async (category) => {
  try {
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/categories`,
      category
    );
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message
    );
  }
};
