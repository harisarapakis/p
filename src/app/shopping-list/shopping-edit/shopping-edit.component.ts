import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef! : ElementRef

  constructor(private slSerice : shoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName,ingAmount)
     this.slSerice.addIngredient(newIngredient)
  }
}
