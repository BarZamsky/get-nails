import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  emailAddress: String,
  password: String,
  phone: String,
  type: String
},
{timestamps: true});