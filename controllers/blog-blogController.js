import Blog from "../models/blog-blogSchema.js";
import mongoose from "mongoose";



export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};




export const getBlogById = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);

  } catch {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};




export const createBlog = async (req, res) => {
  try {

    const { heading, subtitle, description, content, image } = req.body;

    if (!heading || !subtitle || !description || !content) {
      return res.status(400).json({
        error: "Heading, subtitle, description, and content are required"
      });
    }

    const blog = new Blog({
      heading,
      subtitle,
      description,
      content,
      image
    });

    await blog.save();

    res.status(201).json(blog);

  } catch {
    res.status(500).json({ error: "Failed to create blog" });
  }
};




export const updateBlog = async (req, res) => {
  try {

    const { heading, subtitle, description, content, image } = req.body;

    if (!heading || !subtitle || !description || !content) {
      return res.status(400).json({
        error: "Heading, subtitle, description, and content are required"
      });
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        heading,
        subtitle,
        description,
        content,
        image,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);

  } catch {
    res.status(500).json({ error: "Failed to update blog" });
  }
};




export const deleteBlog = async (req, res) => {
  try {

    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog deleted successfully"
    });

  } catch {
    res.status(500).json({ error: "Failed to delete blog" });
  }
};