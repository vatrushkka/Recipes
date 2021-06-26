import { Component, Input } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(public recipeService: RecipesService) {
  }

  public onSelectedRec(): void {
    this.recipeService.recipeItemSelected.emit(this.recipe);
  }
}
