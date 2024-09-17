import { Injectable } from '@nestjs/common';
import { CreateRecBookDto } from './dto/create-rec-book.dto';
import { UpdateRecBookDto } from './dto/update-rec-book.dto';

@Injectable()
export class RecBooksService {
  create(createRecBookDto: CreateRecBookDto) {
    return 'This action adds a new recBook';
  }

  findAll() {
    return `This action returns all recBooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recBook`;
  }

  update(id: number, updateRecBookDto: UpdateRecBookDto) {
    return `This action updates a #${id} recBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} recBook`;
  }
}
