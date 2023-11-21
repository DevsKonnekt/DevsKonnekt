import Message from "../models/message.js";
import User from "../models/users.js";
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
    try {
        const { senderId, receiverId, content } = req.body;
        if (!senderId || !receiverId || !content) {
            return res.status(400).json({ message: "Sender, receiver, and content are required fields." });
        }

        // Check if sender and receiver exist
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);
        if (!sender || !receiver) {
            return res.status(404).json({ message: "Sender or receiver not found." });
        }

        // Create and save the message
        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            content,
        });

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
        const messages = await Message.find().populate("sender receiver"); // Populate sender and receiver details
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
    try {
        const { id } = req.params;
        const message = await Message.findById(id).populate("sender receiver"); // Populate sender and receiver details

        if (!message) {
            return res.status(404).json({ message: "Message not found." });
        }

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
    try {
        const { id } = req.params;

        // Validate input
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ message: "Content is a required field for updating a message." });
        }

        // Update the content of the message
        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            { content },
            { new: true }
        ).populate("sender receiver"); // Populate sender and receiver details

        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found." });
        }

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
    try {
        const { id } = req.params;

        // Find and delete the message
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found." });
        }

        res.status(204).json();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
