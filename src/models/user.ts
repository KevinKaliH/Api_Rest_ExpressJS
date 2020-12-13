import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const User = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
    },
    username: {
        type: String,
        required: [true, 'Plase enter the username'],
        unique: true,
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});

const UserModel = mongoose.model<IUser & mongoose.Document>('User', User);

// User.path('username').validate(async (value: any) => {
//     const emailCount = await UserModel.countDocuments({ username: value });
//     return !emailCount;
// }, 'Username no puede ser duplicado');

// User.path('username').validate((value: any, res: any) => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     UserModel.countDocuments({ username: value }, (err: any, count: number) => {
//         if (count != 0) res(false);
//     });
// }, 'Username no puede ser duplicado');

// UserSchema.path('email').validate(async (value) => {
//     const emailCount = await mongoose.models.User.countDocuments({email: value });
//     return !emailCount;
//   }, 'Email already exists');

export default UserModel;
