import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/exceptions/db-exception-handler';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class IngredientsService {

  private readonly logger = new Logger('IngredientsService');

  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ){}

  async create(createIngredientDto: CreateIngredientDto) {
    try{
      const ingredient = this.ingredientRepository.create({...createIngredientDto});
      await this.ingredientRepository.save(ingredient);
      return ingredient;
    }catch(error){
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
   const {limit=10, offset=10}= paginationDto;

   const ingredients = await this.ingredientRepository.find({
    take: limit,
    skip: offset,
   });
   return ingredients;
  }

  async findOne(term: string) {
    let ingredient: Ingredient;

    ingredient = await this.ingredientRepository.findOneBy({id:term});

    if(!ingredient) throw new NotFoundException(`Ingredient with id ${term} not found`);

    return ingredient;
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto) {
    const ingredient = await this.ingredientRepository.preload({id, ...updateIngredientDto});

    if(!ingredient) throw new NotFoundException(`Ingredient with id ${id} not found`);

    try{

      await this.ingredientRepository.save(ingredient);

      return ingredient;

    }catch (error){
      handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const ingredient = await this.findOne(id);

    await this.ingredientRepository.remove(ingredient);
  }
}
