import { User } from "src/auth/entities/user.entity";
import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'recipe_books'})
export class RecipeBook {

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('text')
    name: string;

    @ManyToOne(()=> User, user => user.recipeBooks, {onDelete: 'CASCADE'})
    owner: User;

    @ManyToMany(()=> Recipe, recipe => recipe.recipeBooks)
    @JoinTable()
    recipes: Recipe[];
}
