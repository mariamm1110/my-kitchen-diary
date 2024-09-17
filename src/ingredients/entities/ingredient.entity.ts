import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ingredients'})
export class Ingredient {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {
        unique:true
    })
    name:string;

    @Column('float')
    quantity:number;

    @Column('text')
    unit: string;

    @Column({
        type: 'enum',
        enum: ['vegetable', 'fruit', 'spice', 'dairy', 'meat', 'grain', 'other', 'liquid'],
        default: 'other'
    })
    category: string;

    

    @ManyToOne(()=> Recipe, recipe => recipe.ingredients)
    recipe: Recipe;

    
}
