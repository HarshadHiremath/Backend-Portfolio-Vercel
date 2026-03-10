import express from "express";

import {
  getLinks,
  updateLinkField
} from "../controllers/link-linkController.js";

const router = express.Router();

router.get("/", getLinks);

router.patch("/:field", updateLinkField);

export default router;