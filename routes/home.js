import express from "express";

import devLogRoutes from "./home-devLogRoutes.js";
// import noticeRoutes from "./home-noticeBoardRoutes.js";
// import visitorRoutes from "./home-visitorRoutes.js";

const router = express.Router();

router.use("/devLog", devLogRoutes);
// router.use("/notices", noticeRoutes);
// router.use("/visitors", visitorRoutes);

export default router;