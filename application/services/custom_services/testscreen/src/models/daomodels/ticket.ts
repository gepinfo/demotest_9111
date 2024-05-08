
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const ticketSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String }
})

const ticketModel = mongoose.model('ticket', ticketSchema, 'ticket');
export default ticketModel;
