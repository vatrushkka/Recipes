import { EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

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

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
