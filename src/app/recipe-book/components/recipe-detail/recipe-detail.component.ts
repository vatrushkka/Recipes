import { Component, Input } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  public show = false;

  public onClickedOutside(): void {
    if (this.show === true) {
      this.show = false;
    } else {
      return;
    }
  }
}
