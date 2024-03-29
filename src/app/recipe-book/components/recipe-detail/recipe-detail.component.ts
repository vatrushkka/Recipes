import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;
  public show = false;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  public onClickedOutside(): void {
    if (this.show === true) {
      this.show = false;
    }
  }

  public toShoppingList(): void {
    this.show = false;
    this.recipeService.onIngredientsToList(this.recipe.ingredients);
  }

  public onEdit(): void {
    this.show = false;
    this.router.navigate(['edit'], {relativeTo: this.route}).then();
  }

  public onDeleteRecipe(): void {
    this.show = false;
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route}).then();
  }
}
