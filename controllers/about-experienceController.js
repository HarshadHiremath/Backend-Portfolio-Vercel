import Experience from "../models/about-experienceSchema.js";
import mongoose from "mongoose";



export const getExperiences = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ createdAt: -1 });
    res.json(experience);
  } catch {
    res.status(500).json({ error: "Failed to fetch experience entries" });
  }
};



export const createExperience = async (req, res) => {
  try {

    const { role, logo, duration, description } = req.body;

    if (!role || !duration || !description) {
      return res.status(400).json({
        error: "Role, duration, and description are required"
      });
    }

    const experience = new Experience({
      role,
      logo,
      duration,
      description
    });

    await experience.save();

    res.status(201).json(experience);

  } catch {
    res.status(500).json({
      error: "Failed to create experience entry"
    });
  }
};




export const updateExperience = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({
        error: "Experience entry not found"
      });
    }

    res.json(experience);

  } catch {
    res.status(500).json({
      error: "Failed to update experience entry"
    });
  }
};



export const deleteExperience = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        error: "Experience entry not found"
      });
    }

    res.json({ message: "Experience entry deleted" });

  } catch {
    res.status(500).json({
      error: "Failed to delete experience entry"
    });
  }
};