import { IAgenda } from '../interfaces/IAgenda';
import mongoose, { Schema } from 'mongoose';

const Agenda = new Schema({
    fullname: {
        type: String,
        required: [false, 'Please enter a full name'],
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [false, 'Please enter a full name'],
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

//exportando de esta manera para evitar usar Agende.Document y usar la interfaz.
export default mongoose.model<IAgenda & mongoose.Document>('Agenda', Agenda);
