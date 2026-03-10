import express from "express";

import {
  trackVisitor,
  getVisitorStats
} from "../controllers/home-visitorControllers.js";

const router = express.Router();

router.post("/track", trackVisitor);
router.get("/stats", getVisitorStats);

export default router;