import Education from "../models/about-educationSchema.js";
import mongoose from "mongoose";



export const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ createdAt: -1 });
    res.json(education);
  } catch {
    res.status(500).json({ error: "Failed to fetch education entries" });
  }
};




export const createEducation = async (req, res) => {
  try {

    const { institution, logo, duration, score, description } = req.body;

    if (!institution || !duration || !description) {
      return res.status(400).json({
        error: "Institution, duration, and description are required"
      });
    }

    const education = new Education({
      institution,
      logo,
      duration,
      score,
      description
    });

    await education.save();

    res.status(201).json(education);

  } catch (err) {
    res.status(500).json({
      error: "Failed to create education entry"
    });
  }
};




export const updateEducation = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!education) {
      return res.status(404).json({
        error: "Education entry not found"
      });
    }

    res.json(education);

  } catch {
    res.status(500).json({
      error: "Failed to update education entry"
    });
  }
};



export const deleteEducation = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const education = await Education.findByIdAndDelete(req.params.id);

    if (!education) {
      return res.status(404).json({
        error: "Education entry not found"
      });
    }

    res.json({ message: "Education entry deleted" });

  } catch {
    res.status(500).json({
      error: "Failed to delete education entry"
    });
  }
};