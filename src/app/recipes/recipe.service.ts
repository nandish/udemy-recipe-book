import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super-testy Schnitzel - just awesome!',
       'https://cdn.pixabay.com/photo/2018/06/12/15/32/garden-3470805_960_720.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient( 'French Fries', 20)
        ]),
    new Recipe('Big Fat Burger', 'What elese you need to say?',
     'https://c.pxhere.com/images/81/7f/ac5c059175a4957415613fa9f36c-1586557.jpg!d',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
