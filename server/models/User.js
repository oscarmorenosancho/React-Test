import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { 
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders',
        },],
    },
    { timestamps: true },
);

export default mongoose.model('User', UserSchema);