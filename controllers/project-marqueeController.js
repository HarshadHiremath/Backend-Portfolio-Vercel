import Marquee from "../models/project-marqueeSchema.js";
import mongoose from "mongoose";

export const getMarquees = async (req, res) => {
  try {
    const marquees = await Marquee.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: marquees
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch marquee items"
    });
  }
};

export const createMarquee = async (req, res) => {
  try {

    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }

    const marquee = new Marquee({ text });

    await marquee.save();

    res.status(201).json({
      success: true,
      data: marquee
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create marquee"
    });
  }
};

export const updateMarquee = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const marquee = await Marquee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!marquee) {
      return res.status(404).json({
        success: false,
        message: "Marquee not found"
      });
    }

    res.json({
      success: true,
      data: marquee
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update marquee"
    });
  }
};

export const deleteMarquee = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const marquee = await Marquee.findByIdAndDelete(req.params.id);

    if (!marquee) {
      return res.status(404).json({
        success: false,
        message: "Marquee not found"
      });
    }

    res.json({
      success: true,
      message: "Marquee deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete marquee"
    });
  }
};