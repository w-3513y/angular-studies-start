import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input('item') recipe: Recipe;
  @Output('selected') recipeSelected = new EventEmitter<void>();

  onClick(){
    this.recipeSelected.emit();
  }
}
