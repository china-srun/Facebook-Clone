import express from "express";
import config from "./configs/config";

function app() {
  const app = express();
  const port = config.PORT || 4000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
}
app();
