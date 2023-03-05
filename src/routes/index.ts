import { Application, Router } from "express";
import user from "./user";
export default (app: Application) => {
  app.use("/user", user());

  const route = Router();
  return app;
};
