import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionEntity } from './entities/session.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/users/user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';

@Controller('sessions')
@ApiTags('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SessionEntity })
  async create(
    @Body() createSessionDto: CreateSessionDto,
    @User() user: UserEntity,
  ) {
    return new SessionEntity(
      await this.sessionsService.create(createSessionDto, user.id),
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionEntity, isArray: true })
  async findAll() {
    return (await this.sessionsService.findAll()).map(
      (session) => new SessionEntity(session),
    );
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionEntity })
  async findOne(@Param('id') id: string) {
    return new SessionEntity(await this.sessionsService.findOne(+id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
    @User() user: UserEntity,
  ) {
    return new SessionEntity(
      await this.sessionsService.update(+id, updateSessionDto, user.id),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionEntity })
  async remove(@Param('id') id: string, @User() user: UserEntity) {
    return new SessionEntity(await this.sessionsService.remove(+id, user.id));
  }
}
