import express from "express";

import badgeRoutes from "./codeDev-badgeRoutes.js";
import profileRoutes from "./codeDev-profileRoutes.js";

const router = express.Router();

router.use("/api/badges", badgeRoutes);
router.use("/api/profiles", profileRoutes);

export default router;