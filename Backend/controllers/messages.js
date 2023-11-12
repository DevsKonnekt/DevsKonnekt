import Message from "../models/message.js";

/**
 * @module controllers/messages.js
 * @requires models/message.js
 * @description Controllers for handling messages in the database
 */

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Create a new message in the database
 */
export const createMessage = async (req, res) => {
    const messageData = req.body;
    const newMessage = new Message(messageData);
    try {
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Get all messages from the database
 */
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Get a single message from the database
 */
export const getMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await Message.findById(id);
        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Find and update a message in the database
 */
export const updateMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedMessage = await Message.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Find and delete a message from the database
 */ 
export const deleteMessage = async (req, res) => {
    const { id } = req.params;
    try {
        await Message.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
