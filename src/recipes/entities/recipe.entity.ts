import { User } from "src/auth/entities/user.entity";
import { Category } from "src/categories/entities/category.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { RecipeBook } from "src/rec-books/entities/rec-book.entity";
import { Step } from "src/steps/entities/step.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'recipes'})
export class Recipe {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name:string;

    @ManyToMany(()=> Category, category => category.recipes)
    categories: Category[];

    //user who originally created or posted the recipe
    @ManyToOne(() => User, user => user.ownedRecipes)
    owner: User;

    //users that have acces to this recipe
    @ManyToMany(()=> User, user => user.accesibleRecipes)
    usersWithAcces: User[];

    @ManyToMany(()=> RecipeBook, recipeBook => recipeBook.recipes)
    recipeBooks: RecipeBook[];

    @OneToMany(()=> Ingredient, ingredient => ingredient.recipe)
    ingredients: Ingredient[];

    @OneToMany(()=> Step, step => step.recipe)
    steps: Step[];
}
