import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TracksModule } from './tracks/tracks.module';
import { SessionsModule } from './sessions/sessions.module';
import { SessionPointsModule } from './session-points/session-points.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    UsersModule,
    AuthModule,
    TracksModule,
    SessionsModule,
    SessionPointsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
