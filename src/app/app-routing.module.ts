// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { RecipesComponent } from './recipe-book/components/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-book/components/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/components/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping/components/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'create',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
