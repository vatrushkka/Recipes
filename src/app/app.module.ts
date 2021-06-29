// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipe-book/recipes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ClickOutsideModule } from 'ng-click-outside';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// services
import { ShoppingService } from './shopping/services/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingModule,
    ClickOutsideModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
