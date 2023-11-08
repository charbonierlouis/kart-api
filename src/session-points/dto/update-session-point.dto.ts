import { PartialType } from '@nestjs/swagger';
import { CreateSessionPointDto } from './create-session-point.dto';

export class UpdateSessionPointDto extends PartialType(CreateSessionPointDto) {}
