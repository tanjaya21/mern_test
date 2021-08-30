import express from 'express';
import mongoose from 'mongoose';

import database from '../models/database.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const Database = await database.find();
                
        res.status(200).json(Database);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { name, email, phone, note } = req.body;

    const newDatabase = new database({ name, email, phone, note })

    try {
        await newDatabase.save();

        res.status(201).json(newDatabase );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;