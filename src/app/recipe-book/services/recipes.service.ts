import { EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

export class RecipesService {
  public recipeItemSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Name of recipe', 'some description', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg'),
    new Recipe('Test recipe', 'some description', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg')
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
