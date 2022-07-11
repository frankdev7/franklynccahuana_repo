import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/company.entity';
import { TribesModule } from './tribes/tribes.module';
import { Tribe } from './tribes/tribe.entity';
import { ReposModule } from './repos/repos.module';
import { MetricsModule } from './metrics/metrics.module';
import { Repo } from './repos/repos.entity';
import { Metric } from './metrics/metric.entity';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: 'free-tier14.aws-us-east-1.cockroachlabs.cloud',
      port: 26257,
      username: 'frank',
      password: 'vtKMCCciF6pzLeleX4kMDw',
      database: 'phased-fowl-3434.defaultdb',
      entities: [Company, Tribe, Repo, Metric],
      synchronize: true,
      extra: {
        ssl: true
      }
    }),
    RepositoriesModule, CompaniesModule, TribesModule, ReposModule, MetricsModule, CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
