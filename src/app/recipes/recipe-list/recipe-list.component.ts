import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Tomato', 'a fruit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyup5b7eON6YfacLRRcFn0rtmssUh0BPS8vAz9aSAgw&s')
  ];

}
