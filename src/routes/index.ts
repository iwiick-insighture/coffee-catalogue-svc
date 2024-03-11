import { healthHandler } from "../handlers";

const express = require("express");
const router = express.Router();

router.get("/health", healthHandler);

export default router;
