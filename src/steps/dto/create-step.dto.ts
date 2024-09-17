import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateStepDto {

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    order:number; 

    @IsNotEmpty()
    @IsString()
    description:string;

    
}
