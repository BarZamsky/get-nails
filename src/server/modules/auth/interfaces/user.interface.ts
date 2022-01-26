import { Document } from 'mongoose';

export interface User extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly city: string;
  password: string;
  readonly created_at: Date;
}