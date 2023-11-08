import { Module } from '@nestjs/common';
import { SessionPointsService } from './session-points.service';
import { SessionPointsController } from './session-points.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SessionsService } from 'src/sessions/sessions.service';

@Module({
  controllers: [SessionPointsController],
  providers: [SessionPointsService, SessionsService],
  imports: [PrismaModule],
})
export class SessionPointsModule {}
