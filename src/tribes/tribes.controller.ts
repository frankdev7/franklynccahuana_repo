import { Controller, Get, Param } from '@nestjs/common';
import { TribeDto } from './dto/tribe.dto';
import { TribesService } from './tribes.service';

@Controller('tribes')
export class TribesController {
  constructor(
    private readonly tribesService: TribesService,
  ) { }

  @Get('/:id')
  async getReposByTribeId(@Param('id') id: string): Promise<TribeDto> {
    return this.tribesService.getReposByTribeId(id);
  }
}
