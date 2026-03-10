import express from "express";

import badgeRoutes from "./routes/badgeRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

const router = express.Router();

router.use("/api/badges", badgeRoutes);
router.use("/api/profiles", profileRoutes);

export default router;