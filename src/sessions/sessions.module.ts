import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SessionPointsService } from 'src/session-points/session-points.service';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService, SessionPointsService],
  imports: [PrismaModule],
})
export class SessionsModule {}
