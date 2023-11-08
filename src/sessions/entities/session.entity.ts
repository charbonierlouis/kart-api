import { ApiProperty } from '@nestjs/swagger';
import { Session } from '@prisma/client';

export class SessionEntity implements Session {
  constructor(partial: Partial<SessionEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  startAt: string;

  @ApiProperty()
  endAt: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  trackId: number;
}
