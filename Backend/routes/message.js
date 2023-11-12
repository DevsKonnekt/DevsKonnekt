/**
 * @module routes/messages
 * @requires express
 * @requires controllers/messages
 * @description Routes for messages
 */
import { Router } from "express";
import {
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage,
    // Import other controller functions as needed
} from "../controllers/messages.js";

const messageRouter = Router();

/**
 * @name POST /messages
 * @description Create a new message
 * @memberof module:routes/messages
 */
messageRouter.post("/", createMessage);

/**
 * @name GET /messages
 * @description Get all messages
 * @memberof module:routes/messages
 */
messageRouter.get("/", getAllMessages);

/**
 * @name GET /messages/:id
 * @description Get a single message
 * @memberof module:routes/messages
 */
messageRouter.get("/:id", getMessage);

/**
 * @name PUT /messages/:id
 * @description Update a message
 * @memberof module:routes/messages
 */
messageRouter.put("/:id", updateMessage);

/**
 * @name DELETE /messages/:id
 * @description Delete a message
 * @memberof module:routes/messages
 */
messageRouter.delete("/:id", deleteMessage);

export default messageRouter;
