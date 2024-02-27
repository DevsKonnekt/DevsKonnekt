/* eslint-disable no-undef */
"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const getEvents = async ({
  searchParam,
  sortOrder,
  limit,
  page,
  sortField,
}) => {
  try {
    const { data } = await axios.get(
      `${
        process.env.BACKEND_URL
      }/events?searchParam=${searchParam}&sortField=${sortField}&sortOrder=${sortOrder}&limit=${
        limit ? limit : 10
      }&page=${page}`,
    );
    return data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getEvent = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/events/${id}`);
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};

export const createEvent = async ({ path, event }) => {
  try {
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/events`,
      event,
    );
    revalidatePath(path);
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};

export const updateEvent = async ({ path, id, event }) => {
  try {
    const { data } = await axios.put(
      `${process.env.BACKEND_URL}/events/${id}`,
      event,
    );
    revalidatePath(path);
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};

export const deleteEvent = async ({ path, id }) => {
  try {
    const { data } = await axios.delete(
      `${process.env.BACKEND_URL}/events/${id}`,
    );
    revalidatePath(path);
    return data;
  } catch (error) {
    throw new Error(
      typeof error === "string" ? error : error?.response?.data?.message,
    );
  }
};

export const getEventsByCategory = async (category) => {
  try {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/events/category/${category}`,
    );
    return data;
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
