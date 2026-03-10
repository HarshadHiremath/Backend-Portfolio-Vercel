import express from "express";

import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile
} from "../controllers/codeDev-profileController.js";

const router = express.Router();

router.get("/", getProfiles);
router.post("/", createProfile);
router.patch("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;