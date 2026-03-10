import express from "express";

import {
  getDevLog,
  createDevLog,
  updateDevLog,
  deleteDevLog
} from "../controllers/home-devLogControllers.js";

const router = express.Router();

router.get("/devlog", getDevLog);
router.post("/devlog", createDevLog);
router.put("/devlog/:id", updateDevLog);
router.delete("/devlog/:id", deleteDevLog);

export default router;