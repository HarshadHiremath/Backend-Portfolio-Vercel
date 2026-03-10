import Notice from "../models/home-noticeBoard.js";

// GET all notices
export const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: notices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE notice
export const createNotice = async (req, res) => {
  try {
    const { title, content, date } = req.body;

    const notice = new Notice({
      title,
      content,
      date,
    });

    const savedNotice = await notice.save();

    res.status(201).json({
      success: true,
      data: savedNotice,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE notice
export const updateNotice = async (req, res) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedNotice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    res.json({
      success: true,
      data: updatedNotice,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE notice
export const deleteNotice = async (req, res) => {
  try {
    const deleted = await Notice.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    res.json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};