import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionPointsService } from './session-points.service';
import { CreateSessionPointDto } from './dto/create-session-point.dto';
import { UpdateSessionPointDto } from './dto/update-session-point.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SessionPointEntity } from './entities/session-point.entity';
import { User } from 'src/users/user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';
import { SessionsService } from 'src/sessions/sessions.service';

@Controller('session-points')
@ApiTags('session-points')
export class SessionPointsController {
  constructor(
    private readonly sessionPointsService: SessionPointsService,
    private readonly sessionServie: SessionsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SessionPointEntity })
  async create(
    @Body() createSessionPointDto: CreateSessionPointDto,
    @User() user: UserEntity,
  ) {
    const session = await this.sessionServie.findOne(
      createSessionPointDto.sessionId,
    );

    if (session.userId !== user.id) {
      return UnauthorizedException;
    }

    return new SessionPointEntity(
      await this.sessionPointsService.create(createSessionPointDto),
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionPointEntity, isArray: true })
  async findAll() {
    return (await this.sessionPointsService.findAll()).map(
      (sessionPoint) => new SessionPointEntity(sessionPoint),
    );
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionPointEntity })
  async findOne(@Param('id') id: string) {
    return new SessionPointEntity(await this.sessionPointsService.findOne(+id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionPointEntity })
  async update(
    @Param('id') id: string,
    @Body() updateSessionPointDto: UpdateSessionPointDto,
    @User() user: UserEntity,
  ) {
    const sessionPoint = await this.sessionPointsService.findOne(+id);

    const session = await this.sessionServie.findOne(sessionPoint.sessionId);

    if (session.userId !== user.id) {
      return UnauthorizedException;
    }

    return new SessionPointEntity(
      await this.sessionPointsService.update(+id, updateSessionPointDto),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SessionPointEntity })
  async remove(@Param('id') id: string, @User() user: UserEntity) {
    const sessionPoint = await this.sessionPointsService.findOne(+id);

    const session = await this.sessionServie.findOne(sessionPoint.sessionId);

    if (session.userId !== user.id) {
      return UnauthorizedException;
    }

    return new SessionPointEntity(await this.sessionPointsService.remove(+id));
  }
}
