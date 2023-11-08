import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class TracksService {
  constructor(private prisma: PrismaService) {}

  create(createTrackDto: CreateTrackDto, userId: User['id']) {
    return this.prisma.track.create({
      data: {
        ...createTrackDto,
        ownerId: userId,
      },
    });
  }

  findAll() {
    return this.prisma.track.findMany();
  }

  findOne(id: number) {
    return this.prisma.track.findUnique({ where: { id } });
  }

  async update(
    id: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateTrackDto: UpdateTrackDto,
    userId: User['id'],
  ) {
    const track = await this.prisma.track.findUnique({ where: { id } });

    if (track.ownerId !== userId) {
      throw new UnauthorizedException();
    }

    return this.prisma.track.update({
      where: { id },
      data: updateTrackDto,
    });
  }

  async remove(id: number, userId: User['id']) {
    const track = await this.prisma.track.findUnique({ where: { id } });

    if (track.ownerId !== userId) {
      throw new UnauthorizedException();
    }

    return this.prisma.track.delete({ where: { id } });
  }
}
