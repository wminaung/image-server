import express from "express";
import type { NextFunction, Request, Response } from "express";
import { createRoot, getRoot } from "../controllers/index.controller";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

/* GET home page. */
router.get("/", upload.single("file"), (req, res, next) => {
  console.log("fiele ::: ", req.files);
  res.send("Hell");
});
router.post("/upload", upload.single("file"), (req, res, next) => {
  console.log("fiele ::: ", req.file);
});

export default router;
