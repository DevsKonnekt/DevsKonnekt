/**
 * @module controllers/users
 * @requires models/users
 * @requires bcryptjs
 * @description Controllers for users
 */

import User from "../models/users.js";
import bcrypt from "bcryptjs";


/**
 * 
 * @param {Request} req http request
 * @param {Response} res http response
 * @description Create a new user in the database
 */
export const createUser = async(req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


/**
 * 
 * @param {Request} req http request
 * @param {Response} res http response
 * @description Get all users from the database
 */
export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * 
 * @param {Request} req http request
 * @param {Response} res http response
 * @description Get a single user from the database
 */
export const getUser = async(req, res) => {
    const {id} = req.params;
    try {
        const userData = await User.findById(id);
        const user = userData._doc;
        user.password = undefined;
        res.status(200).json(user);
    }  catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * 
 * @param {Request} req http request
 * @param {Response} res http response
 * @description Find and update a user in the database
 */
export const updateUser = async(req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
        const user = updatedUser._doc;
        user.password = undefined;
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

/**
 * 
 * @param {Request} req http request
 * @param {Response} res http response
 * @description Find and delete user from the database
 */
export const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id );
        res.status(204);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};