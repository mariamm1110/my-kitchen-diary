import { Module } from '@nestjs/common';
import { RecBooksService } from './rec-books.service';
import { RecBooksController } from './rec-books.controller';

@Module({
  controllers: [RecBooksController],
  providers: [RecBooksService],
})
export class RecBooksModule {}
