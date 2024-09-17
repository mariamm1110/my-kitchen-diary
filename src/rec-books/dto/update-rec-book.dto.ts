import { PartialType } from '@nestjs/swagger';
import { CreateRecBookDto } from './create-rec-book.dto';

export class UpdateRecBookDto extends PartialType(CreateRecBookDto) {}
