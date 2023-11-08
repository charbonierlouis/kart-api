import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  startAt: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  endAt: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  trackId: number;
}
