import express from "express";

import {
  getMarquees,
  createMarquee,
  updateMarquee,
  deleteMarquee
} from "../controllers/project-marqueeController.js";

const router = express.Router();

router.get("/", getMarquees);
router.post("/", createMarquee);
router.patch("/:id", updateMarquee);
router.delete("/:id", deleteMarquee);

export default router;