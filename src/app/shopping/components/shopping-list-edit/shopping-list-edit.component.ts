import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() public ingRef = new EventEmitter<Ingredient>();

  public onAddIngredient(): void {
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingRef.emit(newIngredient);
  }
}
