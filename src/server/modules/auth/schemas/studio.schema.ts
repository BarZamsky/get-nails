import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudioDocument = Studio & Document;

@Schema()
export class Studio {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone_number: string;

  @Prop()
  city: string;

  @Prop()
  street_address: string;

  @Prop()
  open_hour: string;

  @Prop()
  close_hour: string;

  @Prop()
  is_fully_booked: boolean;

  @Prop({ required: true, default: Date.now })
  created_at: Date;
}

export const StudioSchema = SchemaFactory.createForClass(Studio);
