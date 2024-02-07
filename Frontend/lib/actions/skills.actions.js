"use server";

import axios from "axios";

export const addSkill = async (skill) => {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/skills/`, {
      name: skill,
    });
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export const getAllSkills = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/skills/?name=${query || ""}`
    );
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};
