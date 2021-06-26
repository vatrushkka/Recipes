import { Component, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
  public selectedRecipeI: Recipe;

  constructor(public recipeService: RecipesService) {
  }

  public ngOnInit(): void {
    this.recipeService.recipeItemSelected
      .subscribe(
        (recipe: Recipe) => {
        this.selectedRecipeI = recipe;
      }
    );
  }
}
