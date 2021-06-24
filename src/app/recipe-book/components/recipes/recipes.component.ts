import { Component, Output } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Output() selectedRecipeI: Recipe;
}
