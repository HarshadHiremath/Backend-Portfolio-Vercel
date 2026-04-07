import express from "express";

import achievementRoutes from "./about-achievementRoutes.js";
import certificationRoutes from "./about-certificationRoutes.js";
import educationRoutes from "./about-educationRoutes.js";
import experienceRoutes from "./about-experienceRoutes.js";
import skillRoutes from "./about-skillRoutes.js";

const router = express.Router();

router.use("/achievements", achievementRoutes);
router.use("/certifications", certificationRoutes);
router.use("/education", educationRoutes);
router.use("/experience", experienceRoutes);
router.use("/skills", skillRoutes);

export default router;