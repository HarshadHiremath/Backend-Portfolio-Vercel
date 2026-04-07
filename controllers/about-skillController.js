import Skill from "../models/about-skillSchema.js";
import mongoose from "mongoose";



export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch {
    res.status(500).json({ error: "Failed to fetch skill entries" });
  }
};



export const createSkill = async (req, res) => {
  try {

    const { name, logo } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Skill name is required"
      });
    }

    const skill = new Skill({ name, logo });

    await skill.save();

    res.status(201).json(skill);

  } catch {
    res.status(500).json({
      error: "Failed to create skill entry"
    });
  }
};



export const updateSkill = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({
        error: "Skill entry not found"
      });
    }

    res.json(skill);

  } catch {
    res.status(500).json({
      error: "Failed to update skill entry"
    });
  }
};



export const deleteSkill = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        error: "Skill entry not found"
      });
    }

    res.json({ message: "Skill entry deleted" });

  } catch {
    res.status(500).json({
      error: "Failed to delete skill entry"
    });
  }
};