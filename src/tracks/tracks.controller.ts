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
import { TracksService } from './tracks.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { User } from 'src/users/user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TrackEntity } from './entities/track.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tracks')
@ApiTags('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: TrackEntity })
  async create(
    @Body() createTrackDto: CreateTrackDto,
    @User() user: UserEntity,
  ) {
    return new TrackEntity(
      await this.tracksService.create(createTrackDto, user.id),
    );
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TrackEntity, isArray: true })
  async findAll() {
    return (await this.tracksService.findAll()).map(
      (track) => new TrackEntity(track),
    );
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TrackEntity })
  async findOne(@Param('id') id: string) {
    return new TrackEntity(await this.tracksService.findOne(+id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TrackEntity })
  async update(
    @Param('id') id: string,
    @Body() updateTrackDto: UpdateTrackDto,
    @User() user: UserEntity,
  ) {
    return new TrackEntity(
      await this.tracksService.update(+id, updateTrackDto, user.id),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: TrackEntity })
  async remove(@Param('id') id: string, @User() user: UserEntity) {
    return new TrackEntity(await this.tracksService.remove(+id, user.id));
  }
}
