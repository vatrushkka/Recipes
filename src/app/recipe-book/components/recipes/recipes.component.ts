import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(public recipeService: RecipesService) {
  }

  ngOnInit(): void {
  }
}
