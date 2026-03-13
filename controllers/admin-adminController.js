import Admin from "../models/admin-AdminSchema.js";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required"
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email"
      });
    }

    // Normal password comparison
    if (password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }
};


export const createAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required"
      });
    }

    const existing = await Admin.findOne({ email });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists"
      });
    }

    const admin = new Admin({
      email,
      password
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: "Admin created successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};



// 3️⃣ VERIFY JWT TOKEN
export const verifyToken = async (req, res) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        valid: false,
        message: "Token missing"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({
      valid: true,
      user: decoded
    });

  } catch (error) {

    res.status(401).json({
      valid: false,
      message: "Invalid token"
    });

  }

};