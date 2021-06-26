import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';

import { ShoppingService } from 'src/app/shopping/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  public ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {
  }

  public ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientRef
      .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
