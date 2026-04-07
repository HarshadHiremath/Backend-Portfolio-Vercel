import express from "express";

import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation
} from "../controllers/about-educationController.js";

const router = express.Router();

router.get("/", getEducation);
router.post("/", createEducation);
router.patch("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;