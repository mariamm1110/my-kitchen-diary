import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'steps'})
export class Step {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    order: number;

    @Column('text')
    description: string;    


    @ManyToOne(()=> Recipe, recipe => recipe.steps, {onDelete: 'CASCADE'})
    recipe: Recipe;
}
