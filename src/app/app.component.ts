import { Component } from '@angular/core';
import { MenuOptions } from './enums/menuOptions.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menu = MenuOptions;
  menuOption = MenuOptions.Recipe;

  title = 'angular-project';

  onChangeMenu(option: MenuOptions){
    this.menuOption = option;
  }
}
