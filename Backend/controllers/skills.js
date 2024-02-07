/**
 * @module controllers/skills
 * @requires models/skills
 * @description Controller for skills.
 * @exports getSkills
 * @exports createSkill
 * @exports deleteSkill
 * @exports updateSkill
 * @exports getSkill
 */
import Skill from "../models/skills.js";

export const getSkills = async (req, res) => {
  const { query } = req;
  try {
    const skills = await Skill.find({
      name: { $regex: query && query.name, $options: "i" },
    });
    res.status(200).json(skills);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSkill = async (req, res) => {
  const skillData = req.body;
  if (Object.keys(skillData).length === 0) {
    return res.status(400).json({ error: "The required data is missing." });
  }
  try {
    const skillExists = await Skill.findOne({ name: skillData.name });
    if (skillExists) {
      return res
        .status(409)
        .json({ error: "The skill already exists in the database." });
    }
    const skill = await Skill.create(skillData);
    if (!skill) {
      return res.status(400).json({ error: "The skill could not be created." });
    }
    res.status(201).json(skill);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    await Skill.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  const { id } = req.params;
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "The required data is missing." });
    }
    const skillExists = await Skill.findOne({ name: req.body.name });
    if (skillExists) {
      return res
        .status(409)
        .json({ error: "The skill already exists in the database." });
    }
    const updatedSkill = await Skill.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skill.findById(id);
    res.status(200).json(skill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
