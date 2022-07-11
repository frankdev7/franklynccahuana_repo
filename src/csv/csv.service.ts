import { Inject, Injectable } from '@nestjs/common';
import { TribesService } from 'src/tribes/tribes.service';

@Injectable()
export class CsvService {
  constructor(
    @Inject(TribesService) private readonly tribesService: TribesService,
  ) { }

  async getCsv(id: string): Promise<any> {
    return await this.tribesService.getReposByTribeId(id);
  }
}
