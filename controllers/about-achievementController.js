import Achievement from "../models/about-achievementSchema.js";
import mongoose from "mongoose";



export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.json(achievements);
  } catch {
    res.status(500).json({ error: "Failed to fetch achievement entries" });
  }
};




export const createAchievement = async (req, res) => {
  try {
    const { title, year, description } = req.body;

    if (!title || !year || !description) {
      return res.status(400).json({
        error: "Title, year, and description are required"
      });
    }

    const achievement = new Achievement({ title, year, description });
    await achievement.save();

    res.status(201).json(achievement);
  } catch {
    res.status(500).json({ error: "Failed to create achievement entry" });
  }
};




export const updateAchievement = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!achievement) {
      return res.status(404).json({
        error: "Achievement entry not found"
      });
    }

    res.json(achievement);

  } catch {
    res.status(500).json({
      error: "Failed to update achievement entry"
    });
  }
};




export const deleteAchievement = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const achievement = await Achievement.findByIdAndDelete(req.params.id);

    if (!achievement) {
      return res.status(404).json({
        error: "Achievement entry not found"
      });
    }

    res.json({ message: "Achievement entry deleted" });

  } catch {
    res.status(500).json({
      error: "Failed to delete achievement entry"
    });
  }
};