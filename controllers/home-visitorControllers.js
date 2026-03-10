const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");


// Track visitor
router.post("/track", async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const userAgent = req.headers["user-agent"];

    const visitor = new Visitor({
      ip,
      userAgent,
    });

    await visitor.save();

    res.json({
      success: true,
      message: "Visitor tracked",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});




// Get visitor stats
router.get("/stats", async (req, res) => {
  try {

    const totalVisitors = await Visitor.countDocuments();

    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);

    const todayVisitors = await Visitor.countDocuments({
      createdAt: { $gte: todayStart }
    });

    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0,0,0,0);

    const monthlyVisitors = await Visitor.countDocuments({
      createdAt: { $gte: monthStart }
    });

    // online visitors (last 5 minutes)
    const onlineStart = new Date(Date.now() - 5 * 60 * 1000);

    const onlineVisitors = await Visitor.countDocuments({
      createdAt: { $gte: onlineStart }
    });

    res.json({
      success: true,
      data: {
        totalVisitors,
        todayVisitors,
        monthlyVisitors,
        onlineVisitors
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});



module.exports = router;