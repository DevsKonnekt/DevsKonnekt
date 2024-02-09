"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const getProjects = async () => {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/projects/`);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getProject = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/projects/${id}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const createProject = async ({ project, path }) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/projects/`,
      project
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const updateProject = async (id, project, path) => {
  try {
    const response = await axios.put(
      `${process.env.BACKEND_URL}/projects/${id}/${project.owner}/`,
      project
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const deleteProject = async (id, owner, path) => {
  try {
    const response = await axios.delete(
      `${process.env.BACKEND_URL}/projects/${id}/${owner}/`
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getProjectsByUser = async (owner) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/projects/owner/${owner}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
