import express from "express";

import {
  getBadges,
  createBadge,
  updateBadge,
  deleteBadge
} from "../controllers/codeDev-badgeController.js";

const router = express.Router();

router.get("/", getBadges);
router.post("/", createBadge);
router.patch("/:id", updateBadge);
router.delete("/:id", deleteBadge);

export default router;