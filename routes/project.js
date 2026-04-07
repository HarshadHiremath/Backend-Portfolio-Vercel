import express from "express";

import marqueeRoutes from "./project-marqueeRoutes.js";
import milestoneRoutes from "./project-milestoneRoutes.js";
import projectRoutes from "./project-projectRoutes.js";
import testimonialRoutes from "./project-testimonialRoutes.js";

const router = express.Router();

router.use("/marquee", marqueeRoutes);
router.use("/milestones", milestoneRoutes);
router.use("/projects", projectRoutes);
router.use("/testimonials", testimonialRoutes);

export default router;