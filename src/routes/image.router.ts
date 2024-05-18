import express from "express";

import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Set up storage with custom filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/"); // Destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4().replace(/-/g, "");
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
  if (req.file) {
    const fileUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
    console.log("File URL ::: ", fileUrl);

    console.log("f", req.file);

    return res.json({
      url: fileUrl,
      path: req.file.path,
      size: req.file.size,
      filename: req.file.filename,
      host: req.get("host"),
      protocol: req.protocol,
    });
  } else {
    return res.status(400).send("File upload failed.");
  }
});

export default router;
