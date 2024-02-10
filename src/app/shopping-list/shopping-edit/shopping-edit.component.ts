import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @Output('addIngredient') emitter = new EventEmitter<Ingredient>();

  onAdd(){
    const item = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.emitter.emit(item);
  }

}
