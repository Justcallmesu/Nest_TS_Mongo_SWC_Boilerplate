import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL as string, {
      dbName: process.env.MONGODB_DB as string,
      appName: 'alfa-link-api',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
