import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        unique: true,
    },
    Timestamp: {
        type: Date,
        default: Date.now,
    }
});



const User = mongoose.model('User', UserSchema);

export default User;