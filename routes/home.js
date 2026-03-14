import express from "express";

import devLogRoutes from "./home-devLogRoutes.js";
import noticeRoutes from "./home-noticeBoardRoutes.js";
import visitorRoutes from "./home-visitorRoutes.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.use("/devLog", protect, devLogRoutes);
router.use("/notices", protect, noticeRoutes);
router.use("/visitors", visitorRoutes);

export default router;