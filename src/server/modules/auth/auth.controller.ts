import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  UseGuards,
  Request,
  Get
} from "@nestjs/common";

import { AuthService } from './auth.service';
import { CreateUserDto } from "./dtos/create-user.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body(ValidationPipe) createUserDto: CreateUserDto
  ): Promise<void> {
    return await this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }
}
