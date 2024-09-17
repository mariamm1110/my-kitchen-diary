import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateIngredientDto {

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsNumber()
    quantity:number;

    @IsNotEmpty()
    @IsString()
    unit: string;

    @IsOptional()
    @IsEnum(['vegetable', 'fruit', 'spice', 'dairy', 'meat', 'grain', 'other', 'liquid'])
    category?: string;
    
}
