import Visitor from "../models/home-visitor.js";
import { UAParser } from "ua-parser-js";


// Track visitor
export const trackVisitor = async (req, res) => {
  try {

    const { page, screenSize, sessionId } = req.body;

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "";

    const parser = new UAParser(userAgent);

    const browserName = parser.getBrowser().name || "Unknown";
    const osName = parser.getOS().name || "Unknown";
    const device = parser.getDevice().type || "Desktop";
    const deviceBrand = parser.getDevice().vendor || "Desktop";

    const language = req.headers["accept-language"] || "Unknown";
    const referrer = req.headers["referer"] || "direct";

    // Prevent duplicate entry
    const existing = await Visitor.findOne({
      sessionId,
      page,
    });

    if (existing) {
      return res.json({
        success: true,
        message: "Visitor already tracked",
      });
    }

    const visitor = new Visitor({
      ip,
      browserName,
      osName,
      device,
      deviceBrand,
      language,
      referrer,
      screenSize,
      page,
      sessionId,
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
};


export const getVisitorStats = async (req, res) => {
  try {

    const now = new Date();

    // Today start
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    // Month start
    const monthStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    // Online visitors (last 5 minutes)
    const onlineStart = new Date(Date.now() - 5 * 60 * 1000);

    const [
      totalVisitors,
      todayVisitors,
      monthlyVisitors,
      onlineVisitors
    ] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.countDocuments({ createdAt: { $gte: todayStart } }),
      Visitor.countDocuments({ createdAt: { $gte: monthStart } }),
      Visitor.countDocuments({ createdAt: { $gte: onlineStart } })
    ]);

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
};