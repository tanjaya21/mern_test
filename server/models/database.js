import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    note: String,  
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var database = mongoose.model('database', postSchema);

export default database;