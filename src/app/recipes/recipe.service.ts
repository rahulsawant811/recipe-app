import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor() { }

    recipes: Recipe[] = [
        new Recipe(
            'Easy Fava Bean and Carrot Salad With Ricotta Recipe',
            'This quick and easy salad takes some of spring\'s best produce-bright green fava beans.',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
            [
                new Ingredient('Carrot', 5),
                new Ingredient('Fava Bean', 20),
                new Ingredient('Ricotta', 10)
            ]
        ),
        new Recipe(
            'Pressure Cooker Potato Salad with Carrots',
            'Well, not only is it good, it is delicious.',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVkMV6Nct_x9VbZpGb9NqCYVTJzaC4_vcC2qgS9Mljil6IDRq',
            [
                new Ingredient('Potato', 5),
                new Ingredient('Eggs', 3)
            ]
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}
