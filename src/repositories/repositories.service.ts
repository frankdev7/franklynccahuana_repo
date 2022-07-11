import { Injectable } from '@nestjs/common';
import { RepositoryDto } from './dto/repository.dto';
const data = require('./mock/data.json');

@Injectable()
export class RepositoriesService {
  constructor() { }

  async getRepositories(): Promise<RepositoryDto[]> {
    let repositoriesDtos = [];
    data.repositories.forEach(repository =>
      repositoriesDtos.push(new RepositoryDto(repository.id, repository.state))
    );

    return repositoriesDtos;
  }
}
