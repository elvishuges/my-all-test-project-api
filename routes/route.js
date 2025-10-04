import express from "express";
import user from "./user.js";
import admin from "./admin.js";
import gemini from "./gemini.js";

const router = express.Router();

router.use("/users", user);
router.use("/admin", admin);
router.use("/gemini", gemini);

export default router;
