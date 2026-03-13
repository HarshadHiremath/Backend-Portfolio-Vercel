import express from "express";
import {
  adminLogin,
  createAdmin,
  verifyToken
} from "../controllers/admin-adminController.js";

const router = express.Router();

router.post("/login", adminLogin);

// Add Admin Route in DB
// router.post("/create", createAdmin);

router.get("/verify", verifyToken);

export default router;