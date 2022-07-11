import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from 'src/metrics/metric.entity';
import { Tribe } from 'src/tribes/tribe.entity';
import { ReposController } from './repos.controller';
import { Repo } from './repos.entity';
import { ReposService } from './repos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Repo, Tribe, Metric])],
  controllers: [ReposController],
  providers: [ReposService]
})
export class ReposModule {}
