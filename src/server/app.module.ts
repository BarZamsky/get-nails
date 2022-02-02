import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ConfigModule } from "@nestjs/config";
import { AppService } from './app.service';
import { AuthModule } from "./src/modules/auth/auth.module";
import { UsersModule } from "./src/modules/users/users.module";
import { StudiosController } from './src/modules/studios/studios.controller';
import { StudiosModule } from './src/modules/studios/studios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}/${process.env.MONGO_COLLECTION}`),
    AuthModule,
    UsersModule,
    StudiosModule
  ],
  controllers: [AppController, StudiosController],
  providers: [AppService],
})
export class AppModule {}
