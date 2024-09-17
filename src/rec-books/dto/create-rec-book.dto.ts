import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateRecBookDto {

    @IsNotEmpty()
    @IsString() 
    name:string;

    @IsOptional()
    @IsArray()
    @IsUUID()
    recipesIds?: string[]; //Optional list of recipe IDs to add to the recipe book
}
