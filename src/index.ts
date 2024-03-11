import express from "express";
import configData from "./configs/config";
const app = express();

app.listen(configData.port, () => {
  console.log(`$ started on port :: ${configData.port}`);
});
