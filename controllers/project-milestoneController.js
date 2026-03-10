import Milestone from "../models/project-MilestoneSchema.js";
import mongoose from "mongoose";



export const getMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: milestones
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch milestones"
    });
  }
};




export const createMilestone = async (req, res) => {
  try {

    const { title, date, description } = req.body;

    if (!title || !date || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, date and description are required"
      });
    }

    const milestone = new Milestone({ title, date, description });

    await milestone.save();

    res.status(201).json({
      success: true,
      data: milestone
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create milestone"
    });
  }
};




export const updateMilestone = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const milestone = await Milestone.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!milestone) {
      return res.status(404).json({
        success: false,
        message: "Milestone not found"
      });
    }

    res.json({
      success: true,
      data: milestone
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update milestone"
    });
  }
};




export const deleteMilestone = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const milestone = await Milestone.findByIdAndDelete(req.params.id);

    if (!milestone) {
      return res.status(404).json({
        success: false,
        message: "Milestone not found"
      });
    }

    res.json({
      success: true,
      message: "Milestone deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete milestone"
    });
  }
};