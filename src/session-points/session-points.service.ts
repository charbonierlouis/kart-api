import { Injectable } from '@nestjs/common';
import { CreateSessionPointDto } from './dto/create-session-point.dto';
import { UpdateSessionPointDto } from './dto/update-session-point.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionPointsService {
  constructor(private prisma: PrismaService) {}

  create(createSessionPointDto: CreateSessionPointDto) {
    return this.prisma.sessionPoint.create({
      data: createSessionPointDto,
    });
  }

  findAll() {
    return this.prisma.sessionPoint.findMany();
  }

  findAllForASession(sessionId: number) {
    return this.prisma.sessionPoint.findMany({
      where: {
        sessionId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.sessionPoint.findUnique({ where: { id } });
  }

  update(id: number, updateSessionPointDto: UpdateSessionPointDto) {
    return this.prisma.sessionPoint.update({
      where: {
        id,
      },
      data: updateSessionPointDto,
    });
  }

  remove(id: number) {
    return this.prisma.sessionPoint.delete({ where: { id } });
  }
}
