import { Inject, Injectable } from '@nestjs/common';
import { response } from 'express';
import { TribesService } from 'src/tribes/tribes.service';

@Injectable()
export class CsvService {
  constructor(
    @Inject(TribesService) private readonly tribesService: TribesService,
  ) { }

  async getCsv(id: string): Promise<any> {
    let repos = await this.tribesService.getReposByTribeId(id);
    let csvData = [];
    repos.repositories.forEach(repo => {
      csvData.push({
        id: repo.id,
        name: repo.name,
        tribe: repo.tribe,
        organization: repo.organization,
        coverage: repo.coverage,
        codeSmells: repo.codeSmells,
        bugs: repo.bugs,
        vulnerabilities: repo.vulnerabilities,
        hotspots: repo.hotspots,
        state: repo.state
      });
    });
    return csvData;
  }
}
