import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './companies/company.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: 'free-tier14.aws-us-east-1.cockroachlabs.cloud',
      port: 26257,
      username: 'frank',
      password: 'vtKMCCciF6pzLeleX4kMDw',
      database: 'phased-fowl-3434.defaultdb',
      entities: [Company],
      synchronize: true,
      extra: {
        ssl: true
      }
    }),
    RepositoriesModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
