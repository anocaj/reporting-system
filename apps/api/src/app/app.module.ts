import { Module } from '@nestjs/common';
import { ReportsModule } from '../reports/reports.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
