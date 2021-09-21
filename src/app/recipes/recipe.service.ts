import {  Injectable } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

 @Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe('A test Recipe','This is a simple test',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
        ,[
          new Ingredient('Meat',1),
          new  Ingredient('Rice',2)
        ])
      ,new Recipe('Another test Recipe','This is a simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
      ,[
        new Ingredient('Chicken',12)
      ])
        ];

        getRecipes() {
            return this.recipes.slice();
        }

        getRecipe(index: number) {
          return this.recipes[index]
        }
        constructor (private slService : shoppingListService) {

        }
        addIngredientsToShoppingList(ingredient : Ingredient[]) {
          this.slService.addIngredients(ingredient)
        }
}