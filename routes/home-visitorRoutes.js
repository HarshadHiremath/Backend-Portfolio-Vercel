import express from "express";

import {
  trackVisitor,
  getVisitorStats,
  getAllVisitors
} from "../controllers/home-visitorControllers.js";

const router = express.Router();

router.post("/track", trackVisitor);
router.get("/stats", getVisitorStats);
router.get("/visitors", getAllVisitors);

export default router;