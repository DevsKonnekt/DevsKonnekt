/**
 * @module routes/users
 * @requires express
 * @requires controllers/users
 * @description Routes for users
 */
import { Router } from "express";
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from "../controllers/users.js";

const userRouter = Router();

/**
 * @name POST /users
 * @description Create a new user
 * @memberof module:routes/users
 */
userRouter.post("/", createUser);

/**
 * @name GET /users
 * @description Get all users
 * @memberof module:routes/users
 */
userRouter.get("/", getAllUsers);

/**
 * @name GET /users/:id
 * @description Get a single user
 * @memberof module:routes/users
 */
userRouter.get("/:id", getUser);

/**
 * @name PUT /users/:id
 * @description Update a user
 * @memberof module:routes/users
 */
userRouter.put("/:id", updateUser); 

/**
 * @name DELETE /users/:id
 * @description Delete a user
 * @memberof module:routes/users
 */
userRouter.delete("/:id", deleteUser);

export default userRouter;