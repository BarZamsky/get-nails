import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from "@nestjs/jwt";

import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>,
              private jwtService: JwtService
  ) {}

  async register(authCredentialsDto: CreateUserDto): Promise<void> {
    const { password } = authCredentialsDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    authCredentialsDto['password'] = hashedPassword;
    const user = new this.userModel(authCredentialsDto);

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async login(user: User) {
    const payload = { userId: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    }
    return null;
  }
}
