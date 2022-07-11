import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Metric } from 'src/metrics/metric.entity';
import { Tribe } from 'src/tribes/tribe.entity';
import { Repository } from 'typeorm';
import { Repo } from './repos.entity';

@Injectable()
export class ReposService {
  constructor(
    @InjectRepository(Repo)
    private readonly repoRepository: Repository<Repo>,
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,
  ) { }

  async getRepoById(id: string): Promise<any> {

    // let tribe = await this.tribeRepository.findOneBy({ id: 2 });
    // let repoTemp = new Repo();
    // repoTemp.tribeId = tribe;
    // repoTemp.name = "Repo Commons";
    // repoTemp.state = "E";
    // repoTemp.status = "A";
    // await this.repoRepository.save(repoTemp);

    let metric = new Metric();
    metric.coverage = 85;
    metric.bugs = 1;
    metric.vulnerabilities = 1;
    metric.hotspot = 1;
    metric.codeSmell = 2;
    let metricObj = await this.metricRepository.save(metric);
    console.log(metricObj);

    // let metricObj = await this.metricRepository.findOneBy({ id: 2 });
    // console.log("FRANKK")
    // console.log(metricObj);

    let repo = await this.repoRepository.findOneBy({ id: 2 });
    repo.metricId = metricObj;
    await this.repoRepository.save(repo);
    console.log(repo);

    let tribe = await this.tribeRepository.createQueryBuilder("tribe")
      .leftJoinAndSelect("tribe.repos", "repo")
      .where("tribe.id = :id", { id: 1 })
      .getOne();
    
    


    // let repos = await this.repoRepository.find();
    // tribe.repos.push(repos[0]);
    // await this.tribeRepository.save(tribe);

    console.log(tribe.repos);
    return null;
  }
}
