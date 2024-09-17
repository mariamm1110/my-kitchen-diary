import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleGuard } from '../guards/user-role/user-role.guard';
import { RecipeBook } from "src/rec-books/entities/rec-book.entity";
import { Recipe } from "src/recipes/entities/recipe.entity";


@Entity({name: 'auth'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique:true
    })
    email:string;

    @Column('text',{
        unique:true
    })
    username:string;

    @Column('text',{
        select:false
    })
    password:string;

    @Column('text')
    name:string;

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @Column('text',{
        array: true,
        default: ['user']
    })
    roles: string[];

    //Recipes the user owns
    @OneToMany(()=> Recipe, recipe => recipe.owner)
    ownedRecipes: Recipe[]; 

    //recipes the user has acces to
    @ManyToMany(()=> Recipe, recipe => recipe.usersWithAcces)
    @JoinTable()
    accesibleRecipes: Recipe[];

    @OneToMany(()=> RecipeBook, recipeBook => recipeBook.owner)
    recipeBooks: RecipeBook[];
}
