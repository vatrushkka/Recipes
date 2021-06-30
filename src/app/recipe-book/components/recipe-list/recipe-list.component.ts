import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{
  public recipes: Recipe[];

  constructor(public recipeService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
