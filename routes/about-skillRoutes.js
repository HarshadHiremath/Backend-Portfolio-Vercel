import express from "express";

import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from "../controllers/about-skillController.js";

const router = express.Router();

router.get("/", getSkills);
router.post("/", createSkill);
router.patch("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;