import { Module } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { ClaseController } from './clase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ClaseController],
  providers: [ClaseService],
})
export class ClaseModule {}
