// import mongoose from "mongoose";

// const visitorSchema = new mongoose.Schema(
//   {
//     ip: String,
//     browserName: String,
//     osName: String,
//     device: String,
//     deviceBrand: String,
//     language: String,
//     referrer: String,
//     screenSize: String,
//     page: String,
//     sessionId: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Visitor", visitorSchema);


// import mongoose from "mongoose";

// const visitorSchema = new mongoose.Schema(
//   {
//     ip: String,
//     sessionId: String,
//     city: String,
//     region: String,
//     country: String,
//     latitude: String,
//     longitude: String,
//     org: String,
//     postal: String,
//     timezone: String,

//     browserName: String,
//     osName: String,
//     device: String,
//     deviceBrand: String,
//     language: String,
//     screenSize: String,
//     page: String,
    
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Visitor", visitorSchema);


import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    // 🔑 Session tracking
    sessionId: {
      type: String,
      required: true,
      index: true,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },

    // 🌍 IP + Location data
    ip: String,
    city: String,
    region: String,
    country: String,
    loc:String,
    org: String,
    postal: String,
    timezone: String,

    // 🌐 UTM tracking (social/media source)
    utmSource: {
      type: String,
      default: "direct",
    },
    // utmMedium: String,
    // utmCampaign: String,
    // utmContent: String,

    // 🖥 Device / Browser info
    browserName: String,
    osName: String,
    device: String,
    deviceBrand: String,
    userAgent: String,
    platform: String,

    // 🌐 Request / Page info
    language: String,
    screenSize: String,

  },
  {
    timestamps: true, // createdAt = session start
  }
);

export default mongoose.model("Visitor", visitorSchema);