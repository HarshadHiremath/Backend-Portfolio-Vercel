import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createContact,
  getContacts,
  deleteContact
} from "../controllers/contact-contactController.js";

const router = express.Router();

router.post("/", createContact);

router.get("/", protect, getContacts);

router.delete("/:id", protect, deleteContact);

export default router;