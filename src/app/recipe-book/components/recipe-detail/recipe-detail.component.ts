import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit{
  @Input() recipe: Recipe;
  public show = false;

  constructor(public recipeService: RecipesService) {
  }

  public ngOnInit(): void {
  }

  public onClickedOutside(): void {
    if (this.show === true) {
      this.show = false;
    } else {
      return;
    }
  }

  public toShoppingList(): void {
    this.recipeService.onIngredientsToList(this.recipe.ingredients);
  }
}
