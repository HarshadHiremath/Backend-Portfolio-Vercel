import Visitor from "../models/home-visitor.js";
import crypto from "crypto";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 min

// import { UAParser } from "ua-parser-js";
// // Track visitor
// export const trackVisitor = async (req, res) => {
//   try {

//     const { page, screenSize, sessionId } = req.body;

//     const ip =
//       req.headers["x-forwarded-for"]?.split(",")[0] ||
//       req.socket.remoteAddress ||
//       "unknown";

//     const userAgent = req.headers["user-agent"] || "";

//     const parser = new UAParser(userAgent);

//     const browserName = parser.getBrowser().name || "Unknown";
//     const osName = parser.getOS().name || "Unknown";
//     const device = parser.getDevice().type || "Desktop";
//     const deviceBrand = parser.getDevice().vendor || "Desktop";

//     const language = req.headers["accept-language"] || "Unknown";
//     const referrer = req.headers["referer"] || "direct";

//     // Prevent duplicate entry
//     // const existing = await Visitor.findOne({
//     //   sessionId,
//     //   page,
//     // });

//     // if (existing) {
//     //   return res.json({
//     //     success: true,
//     //     message: "Visitor already tracked",
//     //   });
//     // }

//     const visitor = new Visitor({
//       ip,
//       browserName,
//       osName,
//       device,
//       deviceBrand,
//       language,
//       referrer,
//       screenSize,
//       page,
//       sessionId,
//     });

//     await visitor.save();

//     res.json({
//       success: true,
//       message: "Visitor tracked",
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };

// 🔑 Get client IP
const getClientIP = (req) => {
    return (
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket?.remoteAddress ||
        req.ip ||
        ""
    );
};

// 🌍 Fetch IP info
const getIPInfo = async (ip) => {
    try {
        const res = await fetch(`https://ipinfo.io/${ip}/json`);
        return await res.json();
    } catch (err) {
        console.log("IP Info Error:", err);
        return {};
    }
};

// 🚀 MAIN FUNCTION
export const trackVisitor = async (req, res) => {
    try {
        const { sessionId, screenSize, utmSource, language } = req.body;

        const ip = getClientIP(req);

        // 🔍 Find existing session
        let existing = await Visitor.findOne({ sessionId });
        const now = Date.now();

        // 🟢 CASE 1: No session → create new
        if (!existing) {
            const ipData = await getIPInfo(ip);
            const newSessionId = crypto.randomUUID();

            await Visitor.create({
                sessionId: newSessionId,
                ip,
                screenSize,
                utmSource,
                language,

                // 🌍 IP data
                city: ipData.city,
                region: ipData.region,
                country: ipData.country,
                loc: ipData.loc,
                org: ipData.org,
                postal: ipData.postal,
                timezone: ipData.timezone,

                lastActivity: new Date(),
            });

            return res.json({ new: true, sessionId: newSessionId });
        }

        // 🔍 Check expiry
        const last = new Date(existing.lastActivity).getTime();
        const isExpired = now - last > SESSION_TIMEOUT;

        // 🔴 CASE 2: Expired → create new session
        if (isExpired) {
            const ipData = await getIPInfo(ip);
            const newSessionId = crypto.randomUUID();

            await Visitor.create({
                sessionId: newSessionId,
                ip,
                screenSize,
                utmSource,
                language,

                // 🌍 IP data
                city: ipData.city,
                region: ipData.region,
                country: ipData.country,
                loc: ipData.loc,
                org: ipData.org,
                postal: ipData.postal,
                timezone: ipData.timezone,

                lastActivity: new Date(),
            });

            return res.json({ new: true, sessionId: newSessionId });
        }

        // 🟡 CASE 3: Within 30 min → IGNORE
        return res.json({
            new: false,
            message: "Same session - ignored",
        });
    } catch (error) {
        console.error("trackVisitor Error:", error);
        return res.status(500).json({ error: "Server error" });
    }
};



export const getVisitorStats = async (req, res) => {
    try {
        const now = new Date();

        // Today start
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);

        // Month start
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

        // Online visitors (last 5 minutes)
        const onlineStart = new Date(Date.now() - 30 * 60 * 1000);

        const [totalVisitors, todayVisitors, monthlyVisitors, onlineVisitors] =
            await Promise.all([
                Visitor.countDocuments(),
                Visitor.countDocuments({ createdAt: { $gte: todayStart } }),
                Visitor.countDocuments({ createdAt: { $gte: monthStart } }),
                Visitor.countDocuments({ createdAt: { $gte: onlineStart } }),
            ]);

        res.json({
            success: true,
            data: {
                totalVisitors,
                todayVisitors,
                monthlyVisitors,
                onlineVisitors,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find()
            .sort({ createdAt: -1 }) // newest first
            .limit(30); // only 30 records

        res.json({
            success: true,
            data: visitors,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
