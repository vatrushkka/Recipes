import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Output()
  public id: number;
  public editMode = false;
  public recipeForm: FormGroup;

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
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
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  public AddIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'desc': new FormControl(recipeDescription, Validators.required),
      'image': new FormControl(recipeImage, Validators.required),
      'ingredients': recipeIngredients
    });
  }
}
