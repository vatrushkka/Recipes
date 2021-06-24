import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Output() selectRecipe = new EventEmitter<void>();
  @Input() recipe: Recipe;

  public selectRecipeItem(): void {
    this.selectRecipe.emit();
  }
}
