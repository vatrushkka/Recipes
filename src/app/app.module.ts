import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe-book/components/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-book/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-book/components/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping/components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/components/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
