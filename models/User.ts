import mongoose, { Schema, model, models } from "mongoose";
import bcypt from 'bcryptjs'

export interface IUser {
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId; // Optional
    createdAt?: Date; // Optional
    updatedAt?: Date; // Optional
}

const userSchema = new Schema<IUser>(
    {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcypt.hash(this.password, 10)
    }
    next()
})

const User = models?.User || model<IUser>("User", userSchema)

export default User