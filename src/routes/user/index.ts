import { Router } from "express";
import user from "./user.controller";
export default () => {
  const router: Router = Router();
  router.get("/", user.getAllUser);
  router.get("/:id", user.getUserById);
  router.post("/", user.createUser);
  router.put("/:id", user.updateUser);
  return router;
};
