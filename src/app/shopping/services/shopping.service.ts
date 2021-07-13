import { Subject } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

export class ShoppingService {
  public ingredientRef = new Subject<Ingredient[]>();
  public currentItem = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('carrot', 2),
    new Ingredient('something', 30),
    new Ingredient('name', 7)
  ];

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  public addNewIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientRef.next(this.ingredients.slice());
  }

  public updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientRef.next(this.ingredients.slice());
  }

  public onAddIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(...newIngredients);
    this.ingredientRef.next(this.ingredients.slice());
  }
}
