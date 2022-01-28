import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from "@nestjs/jwt";

import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { Studio } from './interfaces/studio.interface';
import { CreateStudioDto } from "./dtos/create-studio-dto";

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>,
              @InjectModel('Studio') private studioModel: Model<Studio>,
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

  async signupStudio(createStudioDto: CreateStudioDto): Promise<void> {
    const { password } = createStudioDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    createStudioDto['password'] = hashedPassword;
    const user = new this.studioModel(createStudioDto);

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Studio already exists');
      }
      throw error;
    }
  }

  async login(user: User) {
    const payload = { userId: user._id, type: user.type };
    return {
      access_token: this.jwtService.sign(payload),
      type: user.type
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    let userData = await this.userModel.findOne({ email });
    let studioData = await this.studioModel.findOne({ email });

    if (!userData && !studioData) {
      return null;
    }

    let dataPassword, objToReturn;
    if (userData) {
      userData.type = 'user'
      dataPassword = userData.password;
      objToReturn = userData;
    } else {
      studioData.type = 'studio'
      dataPassword = studioData.password;
      objToReturn = studioData;
    }

    const valid = await bcrypt.compare(password, dataPassword);
    if (valid) {
      return objToReturn;
    }

    return null;
  }
}
