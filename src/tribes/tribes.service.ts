import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/companies/company.entity';
import { Repo } from 'src/repos/repos.entity';
import { Repository } from 'typeorm';
import { RepositoryDto } from './dto/repository.dto';
import { TribeDto } from './dto/tribe.dto';
import { Tribe } from './tribe.entity';
import { COVERAGE, ENABLE } from 'src/utils/constants';

@Injectable()
export class TribesService {
  constructor(
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
  ) { }

  async getTribe(id: string): Promise<TribeDto> {
    let tribe = await this.tribeRepository.createQueryBuilder("tribe")
      .leftJoinAndSelect("tribe.repos", "repo")
      .where("tribe.id = :id", { id })
      .getOne();

    if (tribe === null)
      throw new NotFoundException('Tribe not registered');

    let company = await this.companyRepository.findOneBy({ tribes: tribe.companyId });
    let reposEnableIds = this.getReposEnablesIds(ENABLE, tribe.repos);

    let repos = await this.repoRepository.createQueryBuilder("repo")
      .leftJoinAndSelect("repo.metricId", "metric")
      .where("repo.id IN (:...ids)", { ids: reposEnableIds })
      .andWhere("metric.coverage >= :coverage", { coverage: COVERAGE })
      .andWhere("repo.createdAt >= :date", { date: new Date() })
      .getMany();

    let tribeDto = new TribeDto();
    let repositoriesDto = new Array<RepositoryDto>();
    repos.forEach(repo =>
      repositoriesDto.push(new RepositoryDto(repo.id, repo.name,
        tribe.name, company.name,
        repo.metricId.coverage + "%", repo.metricId.codeSmell,
        repo.metricId.bugs, repo.metricId.vulnerabilities,
        repo.metricId.hotspot, ""))
    );

    if (repositoriesDto.length === 0)
      throw new InternalServerErrorException('La Tribu no tiene repositorios que cumplan con la cobertura necesaria');

    tribeDto.repositories = repositoriesDto;
    return tribeDto;
  }

  getReposEnablesIds(state: string, repos: Repo[]): number[] {
    return repos.filter(repo => repo.state === state).map(repo => repo.id);
  }

}
