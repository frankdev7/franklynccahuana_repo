import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric])],
  providers: [MetricsService],
  controllers: [MetricsController]
})
export class MetricsModule {}
