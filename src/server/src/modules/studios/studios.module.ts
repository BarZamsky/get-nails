import { Module } from '@nestjs/common';
import { StudiosService } from './studios.service';
import { MongooseModule } from "@nestjs/mongoose";
import { StudioSchema } from "../auth/schemas/studio.schema";
import { StudiosController } from "./studios.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Studio', schema: StudioSchema }])
  ],
  controllers: [StudiosController],
  providers: [StudiosService],
  exports: [StudiosService]
})
export class StudiosModule {}
