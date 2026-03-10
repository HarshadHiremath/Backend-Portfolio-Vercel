import Profile from "../models/codeDev-profileSchema.js";
import mongoose from "mongoose";



export const getProfiles = async (req, res) => {
  try {

    const profiles = await Profile.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: profiles
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch profiles"
    });
  }
};




export const createProfile = async (req, res) => {
  try {

    const {
      platform,
      username,
      profileLink,
      questionsSolved,
      rank,
      logo
    } = req.body;

    if (!platform || !username || !profileLink || questionsSolved == null) {
      return res.status(400).json({
        success: false,
        message: "Platform, username, profileLink, and questionsSolved required"
      });
    }

    const profile = new Profile({
      platform,
      username,
      profileLink,
      questionsSolved,
      rank,
      logo
    });

    await profile.save();

    res.status(201).json({
      success: true,
      data: profile
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create profile"
    });
  }
};




export const updateProfile = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    res.json({
      success: true,
      data: profile
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update profile"
    });
  }
};




export const deleteProfile = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const profile = await Profile.findByIdAndDelete(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found"
      });
    }

    res.json({
      success: true,
      message: "Profile deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete profile"
    });
  }
};