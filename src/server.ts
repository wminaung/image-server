import express from "express";
import formidable from "formidable";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import configs from "./configs";
import indexRouter from "./routes/index.router";

const app = express();
// default 3001
const port = configs.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}, http://localhost:${port}`
  );
});
