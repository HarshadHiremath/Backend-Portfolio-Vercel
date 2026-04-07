import express from "express";

import {
  getMilestones,
  createMilestone,
  updateMilestone,
  deleteMilestone
} from "../controllers/project-milestoneController.js";

const router = express.Router();

router.get("/", getMilestones);
router.post("/", createMilestone);
router.patch("/:id", updateMilestone);
router.delete("/:id", deleteMilestone);

export default router;