import express from "express";

import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blog-blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);

router.post("/", createBlog);

router.patch("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export default router;