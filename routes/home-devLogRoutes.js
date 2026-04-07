import express from "express";

import {
  getDevLog,
  createDevLog,
  updateDevLog,
  deleteDevLog
} from "../controllers/home-devLogControllers.js";

const router = express.Router();

router.get("/", getDevLog);
router.post("/", createDevLog);
router.put("/:id", updateDevLog);
router.delete("/:id", deleteDevLog);

export default router;