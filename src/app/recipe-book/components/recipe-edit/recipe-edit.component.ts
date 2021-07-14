import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import {Recipe} from '../../models/recipe.model';
import {Ingredient} from '../../../shared/models/ingredient.model';

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
    console.log(this.id);
  }

  public onSubmit(): void {
    const newRecipe = new Recipe(
      // this.recipeForm.get('recipeName').value,
      // this.recipeForm.get('recipeDescription').value,
      // this.recipeForm.get('recipeImage').value,
      this.recipeForm.value['recipeName'],
      this.recipeForm.value['recipeDescription'],
      this.recipeForm.value['recipeImage'],
      this.recipeForm.value['recipeIngredients']
    )

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    console.log(this.recipeForm.value);
    console.log(this.id);
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
      'recipeDescription': new FormControl(recipeDescription, Validators.required),
      'recipeImage': new FormControl(recipeImage, Validators.required),
      'recipeIngredients': recipeIngredients
    });
  }
}
