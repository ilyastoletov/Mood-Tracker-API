import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MoodModule } from './mood/mood.module';

@Module({
  imports: [AuthModule, MoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
