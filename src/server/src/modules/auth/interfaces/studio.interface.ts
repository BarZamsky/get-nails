import { Document } from 'mongoose';

export interface Studio extends Document {
  readonly name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly city: string;
  readonly open_hour: string;
  readonly close_hour: string;
  readonly is_fully_booked: boolean;
  password: string;
  readonly created_at: Date;
  type: string;
}