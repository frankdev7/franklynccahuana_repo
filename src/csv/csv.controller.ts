import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(
    private readonly csvService: CsvService,
  ) { }

  @Get('/:id')
  async getCsv(@Param('id') id: string, @Res() res: Response): Promise<any> {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=repos.csv');
    res.status(HttpStatus.CREATED).send(await this.csvService.getCsv(id));
  }
}
