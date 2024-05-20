import express from "express";

import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import mainStorage from "../storage/main.storage";
import profileStorage from "../storage/profile.storage";
import {
  foodmanImageUpload,
  profileImageUpload,
} from "../controllers/images.controller";

// // Set up storage with custom filename
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/images/"); // Destination folder
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + uuidv4().replace(/-/g, "");
//     cb(
//       null,
//       `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
//     ); // Custom file name
//   },
// });

const router = express.Router();

/* GET home page. */

router.post("/foodman", foodmanImageUpload);

router.post("/profile", profileImageUpload);

export default router;
