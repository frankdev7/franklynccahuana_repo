import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
