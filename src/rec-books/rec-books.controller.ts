import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecBooksService } from './rec-books.service';
import { CreateRecBookDto } from './dto/create-rec-book.dto';
import { UpdateRecBookDto } from './dto/update-rec-book.dto';

@Controller('rec-books')
export class RecBooksController {
  constructor(private readonly recBooksService: RecBooksService) {}

  @Post()
  create(@Body() createRecBookDto: CreateRecBookDto) {
    return this.recBooksService.create(createRecBookDto);
  }

  @Get()
  findAll() {
    return this.recBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recBooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecBookDto: UpdateRecBookDto) {
    return this.recBooksService.update(+id, updateRecBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recBooksService.remove(+id);
  }
}
