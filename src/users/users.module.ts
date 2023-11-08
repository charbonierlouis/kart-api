import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SessionsService } from 'src/sessions/sessions.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, SessionsService],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
