import Visitor from "../models/home-visitor.js";

// Track visitor
export const trackVisitor = async (req, res) => {
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
};


export const getVisitorStats = async (req, res) => {
  try {

    const totalVisitors = await Visitor.countDocuments();

    const now = new Date();

    // Today start (UTC)
    const todayStart = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      0,0,0,0
    ));

    const todayVisitors = await Visitor.countDocuments({
      createdAt: { $gte: todayStart }
    });

    // Month start (UTC)
    const monthStart = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      1,
      0,0,0,0
    ));

    const monthlyVisitors = await Visitor.countDocuments({
      createdAt: { $gte: monthStart }
    });

    // Online visitors (last 5 minutes)
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
};
