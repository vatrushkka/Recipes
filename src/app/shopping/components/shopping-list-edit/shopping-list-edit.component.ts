import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef: ElementRef;

  constructor(public shoppingService: ShoppingService) {
  }

  public onAddIngredient(): void {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addNewIngredient(newIngredient);
  }
}
