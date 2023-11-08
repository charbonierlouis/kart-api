import { ApiProperty } from '@nestjs/swagger';
import { SessionPoint } from '@prisma/client';

export class SessionPointEntity implements SessionPoint {
  constructor(partial: Partial<SessionPointEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  altitude: number;

  @ApiProperty()
  speed: number;

  @ApiProperty()
  accuracy: number;

  @ApiProperty()
  heading: number;

  @ApiProperty()
  timestamp: string;

  @ApiProperty()
  sessionId: number;
}
