import Testimonial from "../models/project-testimonialSchema.js";
import mongoose from "mongoose";



export const getTestimonials = async (req, res) => {
  try {

    const testimonials = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: testimonials
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials"
    });
  }
};



export const createTestimonial = async (req, res) => {
  try {

    const { quote, source } = req.body;

    if (!quote || !source) {
      return res.status(400).json({
        success: false,
        message: "Quote and source required"
      });
    }

    const testimonial = new Testimonial({ quote, source });

    await testimonial.save();

    res.status(201).json({
      success: true,
      data: testimonial
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create testimonial"
    });
  }
};



export const updateTestimonial = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found"
      });
    }

    res.json({
      success: true,
      data: testimonial
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update testimonial"
    });
  }
};



export const deleteTestimonial = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found"
      });
    }

    res.json({
      success: true,
      message: "Testimonial deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete testimonial"
    });
  }
};