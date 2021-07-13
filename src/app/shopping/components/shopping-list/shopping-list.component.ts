import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  private ingredientsChangeSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientsChangeSubscription = this.shoppingService.ingredientRef
      .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  public onEdit(index: number): void {
    this.shoppingService.currentItem.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSubscription.unsubscribe();
  }
}
