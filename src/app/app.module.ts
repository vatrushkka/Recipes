// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe-book/components/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-book/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-book/components/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-book/components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/components/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping/components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/components/shopping-list-edit/shopping-list-edit.component';

// services
import { ShoppingService } from './shopping/services/shopping.service';
import { RecipesService } from './recipe-book/services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  providers: [
    ShoppingService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
