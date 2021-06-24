import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: RecipesComponent
    }])
  ]
})
export class RecipesModule { }
