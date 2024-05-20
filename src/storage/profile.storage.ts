import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileFilter } from "../utils";

// Set up storage with custom filename
const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/profile/"); // Destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4().replace(/-/g, "");
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    ); // Custom file name
  },
});

export default multer({
  storage: profileStorage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: fileFilter,
});
