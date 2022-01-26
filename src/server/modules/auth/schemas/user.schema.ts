import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop()
  city: string;

  @Prop({ required: true, default: Date.now })
  created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
