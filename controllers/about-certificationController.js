import Certification from "../models/about-certificationSchema.js";
import mongoose from "mongoose";




export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ createdAt: -1 });
    res.json(certifications);
  } catch {
    res.status(500).json({ error: "Failed to fetch certification entries" });
  }
};




export const createCertification = async (req, res) => {
  try {

    const { title, logo, description, link } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        error: "Title and description are required"
      });
    }

    const certification = new Certification({
      title,
      logo,
      description,
      link
    });

    await certification.save();

    res.status(201).json(certification);

  } catch {
    res.status(500).json({
      error: "Failed to create certification entry"
    });
  }
};




export const updateCertification = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!certification) {
      return res.status(404).json({
        error: "Certification entry not found"
      });
    }

    res.json(certification);

  } catch {
    res.status(500).json({
      error: "Failed to update certification entry"
    });
  }
};




export const deleteCertification = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const certification = await Certification.findByIdAndDelete(req.params.id);

    if (!certification) {
      return res.status(404).json({
        error: "Certification entry not found"
      });
    }

    res.json({ message: "Certification entry deleted" });

  } catch {
    res.status(500).json({
      error: "Failed to delete certification entry"
    });
  }
};