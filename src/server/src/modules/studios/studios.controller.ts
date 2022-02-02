import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { StudiosService } from "./studios.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('studios')
export class StudiosController {
  constructor(private studiosService: StudiosService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/data')
  async getData(@Request() req) {
    return await this.studiosService.getStudioData(req.user.userId);
  }
}
