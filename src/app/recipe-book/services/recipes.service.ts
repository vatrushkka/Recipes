import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingService } from 'src/app/shopping/services/shopping.service';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Injectable()
export class RecipesService {
  public recipeItemSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Name of recipe',
      'some description',
      'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('apple', 7)
      ]
      ),
    new Recipe(
      'Test recipe',
      'some description',
      'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg',
      [
        new Ingredient('meat', 7),
        new Ingredient('apple', 2)
      ]
    )
  ];

  constructor(public shoppingService: ShoppingService) {
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  public onIngredientsToList(newIngredients: Ingredient[]): void {
    this.shoppingService.onAddIngredients(newIngredients);
  }

  public getRecipe(index: number): Recipe {
    return this.recipes.slice()[index];
  }
}
