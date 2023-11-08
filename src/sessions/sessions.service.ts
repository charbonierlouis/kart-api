import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) {}

  create(createSessionDto: CreateSessionDto, userId: number) {
    return this.prisma.session.create({
      data: {
        ...createSessionDto,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.session.findMany();
  }

  findAllForAnUser(userId: number) {
    return this.prisma.session.findMany({
      where: {
        userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.session.findUnique({ where: { id } });
  }

  update(id: number, updateSessionDto: UpdateSessionDto, userId: number) {
    return this.prisma.session.update({
      where: {
        id,
        userId,
      },
      data: updateSessionDto,
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.session.delete({ where: { id, userId } });
  }
}
