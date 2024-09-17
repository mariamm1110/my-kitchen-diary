import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'categories'})
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique:true
    })
    name: string;

    @ManyToMany(()=> Recipe, recipe => recipe.categories)
    recipes: Recipe[];
}
