import { ApiProperty } from '@nestjs/swagger';
import { Track } from '@prisma/client';

export class TrackEntity implements Track {
  constructor(partial: Partial<TrackEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;
}
