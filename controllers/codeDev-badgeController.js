import Badge from "../models/codeDev-badgeSchema.js";
import mongoose from "mongoose";




export const getBadges = async (req, res) => {
  try {

    const badges = await Badge.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: badges
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch badges"
    });
  }
};



export const createBadge = async (req, res) => {
  try {

    const { name, platform, logo } = req.body;

    if (!name || !platform) {
      return res.status(400).json({
        success: false,
        message: "Name and platform required"
      });
    }

    const badge = new Badge({ name, platform, logo });

    await badge.save();

    res.status(201).json({
      success: true,
      data: badge
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create badge"
    });
  }
};




export const updateBadge = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const badge = await Badge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!badge) {
      return res.status(404).json({
        success: false,
        message: "Badge not found"
      });
    }

    res.json({
      success: true,
      data: badge
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update badge"
    });
  }
};




export const deleteBadge = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const badge = await Badge.findByIdAndDelete(req.params.id);

    if (!badge) {
      return res.status(404).json({
        success: false,
        message: "Badge not found"
      });
    }

    res.json({
      success: true,
      message: "Badge deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete badge"
    });
  }
};