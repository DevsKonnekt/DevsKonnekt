import { Router } from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const usersRoutes = Router();

usersRoutes.get("/users", getUsers);
usersRoutes.get("/users/:id", getUser);
usersRoutes.patch("/users/:id", updateUser);
usersRoutes.delete("/users/:id", deleteUser);

export default usersRoutes;
