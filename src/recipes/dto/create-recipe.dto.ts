import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateIngredientDto } from "src/ingredients/dto/create-ingredient.dto";
import { CreateStepDto } from "src/steps/dto/create-step.dto";

export class CreateRecipeDto {

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    categories: string[];

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=> CreateIngredientDto) 
    ingredients: CreateIngredientDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateStepDto)
    steps: CreateStepDto[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    usersWithAccess?: string[];
}
