import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSessionPointDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  altitude: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  speed: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  accuracy: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  heading: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  timestamp: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  sessionId: number;
}
