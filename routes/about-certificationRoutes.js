import express from "express";

import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification
} from "../controllers/about-certificationController.js";

const router = express.Router();

router.get("/", getCertifications);
router.post("/", createCertification);
router.patch("/:id", updateCertification);
router.delete("/:id", deleteCertification);

export default router;