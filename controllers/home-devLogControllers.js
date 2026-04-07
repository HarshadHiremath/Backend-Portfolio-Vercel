import DevLog from "../models/home-devLog.js";

// GET all devLog stats
export const getDevLog = async (req, res) => {
  try {
    const devLogStats = await DevLog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: devLogStats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE devLog stat
export const createDevLog = async (req, res) => {
  try {
    const { title, value, description } = req.body;

    const devLog = new DevLog({
      title,
      value,
      description,
    });

    const savedDevLog = await devLog.save();

    res.status(201).json({
      success: true,
      data: savedDevLog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE devLog stat
export const updateDevLog = async (req, res) => {
  try {
    const updatedDevLog = await DevLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDevLog) {
      return res.status(404).json({
        success: false,
        message: "DevLog not found",
      });
    }

    res.json({
      success: true,
      data: updatedDevLog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE devLog
export const deleteDevLog = async (req, res) => {
  try {
    const deleted = await DevLog.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "DevLog not found",
      });
    }

    res.json({
      success: true,
      message: "DevLog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};