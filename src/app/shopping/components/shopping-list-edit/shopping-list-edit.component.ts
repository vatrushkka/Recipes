import { Component } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  constructor(public shoppingService: ShoppingService) {
  }

  public onAddIngredient(ingredientForm: NgForm): void {
    const value = ingredientForm.value;
    const newIngredient = new Ingredient(value.nameInput, value.amountInput);
    this.shoppingService.addNewIngredient(newIngredient);
    ingredientForm.reset();
  }
}
