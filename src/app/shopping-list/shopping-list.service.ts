import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../Shared/ingredient.model";

export class shoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>()
     private ingredient: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Banana',15)
        
      ]

      getIngredients() {
          return this.ingredient;
      }
      
      addIngredient(ingredient : Ingredient){
        this.ingredient.push(ingredient)
        this.ingredientsChanged.next(this.ingredient.slice())
      }
      addIngredients(indredients : Ingredient[]) {
        // for ( let ingredient of indredients){
        //   this.addIngredient(ingredient)
        // }

        this.ingredient.push(...indredients)
        this.ingredientsChanged.next(this.ingredient.slice())
      }
     
}


