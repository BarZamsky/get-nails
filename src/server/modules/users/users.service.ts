import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../auth/interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getUserData(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: userId });
    if (!user) {
      return null;
    }

    user["password"] = null;
    return user;
  }
}
