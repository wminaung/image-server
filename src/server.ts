import express from "express";
import fs from "fs";
import configs from "./configs";
import imageRouter from "./routes/images.router";
import cors from "cors";

const app = express();
// default 3001

const port = configs.port;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
// route
app.use("/images", imageRouter);

app.listen(port, () => {
  if (!fs.existsSync("./public/images")) {
    fs.mkdir("./public/images", { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
      } else {
        console.log("Folder created successfully.");
      }
    });
  }

  if (!fs.existsSync("./public/images/profile")) {
    fs.mkdir("./public/images/profile", { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
      } else {
        console.log("Folder created successfully.");
      }
    });
  }

  console.log(
    `Example app listening on port ${port}, http://localhost:${port}`
  );
});
