import { Component } from '@angular/core';

import {Recipe} from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe('Name of recipe', 'some description', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg'),
    new Recipe('Test recipe', 'some description', 'https://media.self.com/photos/60634a7b6fb177c75e545c84/4:3/w_1600%2Cc_limit/Vegetarian-Mapo-Tofu.jpg')
  ];
}
