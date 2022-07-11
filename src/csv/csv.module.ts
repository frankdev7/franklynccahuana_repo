import { Module } from '@nestjs/common';
import { TribesModule } from 'src/tribes/tribes.module';
import { CsvController } from './csv.controller';
import { CsvService } from './csv.service';

@Module({
  imports: [TribesModule],
  controllers: [CsvController],
  providers: [CsvService],
})
export class CsvModule {}
