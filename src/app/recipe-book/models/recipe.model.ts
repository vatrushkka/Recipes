import { Ingredient } from 'src/app/shared/models/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public image: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, img: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.image = img;
    this.ingredients = ingredients;
  }
}
