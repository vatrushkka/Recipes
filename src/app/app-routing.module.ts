import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./recipe-book/recipes.module').then(m => m.RecipesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
