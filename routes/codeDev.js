import express from "express";

import badgeRoutes from "./codeDev-badgeRoutes.js";
import profileRoutes from "./codeDev-profileRoutes.js";

const router = express.Router();

router.use("/badges", badgeRoutes);
router.use("/profiles", profileRoutes);

export default router;