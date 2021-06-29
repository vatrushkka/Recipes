// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { RecipesComponent } from './recipe-book/components/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-book/components/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/components/recipe-start/recipe-start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)
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
        path: ':id',
        component: RecipeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
