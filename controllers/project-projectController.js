import Project from "../models/project-projectSchema.js";
import mongoose from "mongoose";



export const getProjects = async (req, res) => {
  try {

    const projects = await Project.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: projects
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects"
    });
  }
};




export const createProject = async (req, res) => {
  try {

    const { title, description, image, techStack, liveLink, githubLink } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description required"
      });
    }

    const project = new Project({
      title,
      description,
      image,
      techStack,
      liveLink,
      githubLink
    });

    await project.save();

    res.status(201).json({
      success: true,
      data: project
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create project"
    });
  }
};




export const updateProject = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.json({
      success: true,
      data: project
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update project"
    });
  }
};




export const deleteProject = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.json({
      success: true,
      message: "Project deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project"
    });
  }
};