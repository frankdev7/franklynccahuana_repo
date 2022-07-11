import { Controller, Get, Inject } from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {
  constructor(
    private readonly repositoriesService: RepositoriesService,
  ) { }

  @Get('')
  async getRepositories(): Promise<RepositoryDto[]> {
    return this.repositoriesService.getRepositories();
  }
}
