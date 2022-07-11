import { Controller, Get, Param } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(
    private readonly reposService: ReposService,
  ) {}

  @Get('/:id')
  async getRepoById(@Param('id') id: string): Promise<any> {
    return this.reposService.getRepoById(id);
  }
}
