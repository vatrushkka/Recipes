import { Component } from '@angular/core';
import {Ingredient} from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient('NAme', 5),
    new Ingredient('NAme', 5),
    new Ingredient('NAme', 5),
    new Ingredient('NAme', 5)
  ];
}
