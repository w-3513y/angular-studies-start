import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'a pie', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dnlterecB_QhOrOr5ToVKBfLZInXeXGgMCJXi-vV7A&s'),
    new Recipe('Tomato Extract', 'sauce', 'https://www.newdirections.com.au/WebRoot/Store/Shops/newdirections/5B51/3185/F4F3/FCDF/85A8/C0A8/DA57/FAA5/EXTR5KTOMATO-5-kg-Tomato-Extract-Fruit-Herbal-Powder-Extracts-L-20190919_ml.jpg')
  ];

}
