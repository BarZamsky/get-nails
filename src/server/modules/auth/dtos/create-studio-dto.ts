import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateStudioDto {
  @IsEmail()
  email: string;
  phone_number: string;
  name: string;
  city: string;
  created_at: Date;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;
}