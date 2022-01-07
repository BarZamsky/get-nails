import { Document } from "mongoose";

export interface User extends Document {
  readonly name: string;
  readonly phone: string;
  readonly emailAddress: string;
  readonly password: string;
  readonly creationDate: Date;
  readonly type: string;
}