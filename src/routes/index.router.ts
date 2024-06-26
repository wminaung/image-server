import express from "express";
import type { NextFunction, Request, Response } from "express";
import { createRoot, getRoot } from "../controllers/index.controller";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Set up storage with custom filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + uuidv4().replace(/-/g, "") + "-" + file.filename;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    ); // Custom file name
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

/* GET home page. */

router.post("/foodman", upload.single("foodman"), (req, res, next) => {
  console.log("file ::: ", req.file);
  res.send("end");
});

export default router;
