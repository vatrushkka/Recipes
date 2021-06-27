import { EventEmitter } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

export class ShoppingService {
  public ingredientRef = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('carrot', 2),
    new Ingredient('something', 30),
    new Ingredient('name', 7)
  ];

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public addNewIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientRef.emit(this.ingredients.slice());
  }

  public onAddIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(...newIngredients);
    this.ingredientRef.emit(this.ingredients.slice());
    console.log('i am here');
  }
}
