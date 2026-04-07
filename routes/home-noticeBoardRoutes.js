import express from "express";

import {
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice
} from "../controllers/home-noticeControllers.js";

const router = express.Router();

router.get("/", getNotices);
router.post("/", createNotice);
router.patch("/:id", updateNotice);
router.delete("/:id", deleteNotice);

export default router;