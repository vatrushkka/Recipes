import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  public id: number;
  public editMode = false;
  public recipeForm: FormGroup;

  get controls() {
    return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
  }

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.editMode = params.id != null;
          this.initForm();
        }
      );
  }

  public onSubmit(): void {
    console.log(this.recipeForm)
  }

  public AddIngredient(): void {
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'ingredientName': new FormControl('', Validators.required),
        'ingredientAmount': new FormControl('', [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*/)
        ])
      })
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.image;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name, Validators.required),
              'ingredientAmount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'recipeImage': new FormControl(recipeImage, Validators.required),
      'recipeDescription': new FormControl(recipeDescription, Validators.required),
      'recipeIngredients': recipeIngredients
    });
  }
}
