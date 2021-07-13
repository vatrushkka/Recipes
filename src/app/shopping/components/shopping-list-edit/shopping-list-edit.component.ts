import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild(`form`, {static: false}) ingredientForm: NgForm;

  public subscription: Subscription;
  public editMode = false;
  public currentItemIndex: number;
  public editedItem: Ingredient;

  constructor(public shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingService.currentItem
      .subscribe(
        (index: number) => {
          this.currentItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.ingredientForm.setValue({
            nameInput: this.editedItem.name,
            amountInput: this.editedItem.amount
          });
        }
      );
  }

  public onSubmitIngredient(ingredientForm: NgForm): void {
    const value = ingredientForm.value;
    const newIngredient = new Ingredient(value.nameInput, value.amountInput);

    if (!this.editMode) {
      this.shoppingService.addNewIngredient(newIngredient);
    } else {
      this.shoppingService.updateIngredient(this.currentItemIndex, newIngredient);
      this.editMode = false;
    }

    ingredientForm.reset();
  }

  public onClear(): void {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
