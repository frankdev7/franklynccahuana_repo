import { Module } from '@nestjs/common';
import { TribesService } from './tribes.service';
import { TribesController } from './tribes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribe } from './tribe.entity';
import { Company } from 'src/companies/company.entity';
import { Repo } from 'src/repos/repos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe, Company, Repo])],
  providers: [TribesService],
  controllers: [TribesController],
  exports: [TribesService]
})
export class TribesModule {}
