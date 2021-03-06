import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../Shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  private subscription! :Subscription;
  ingredients?: Ingredient[] 
  
 
  constructor(private slService : shoppingListService) { 
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients()
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
