import { Component, EventEmitter, Output } from '@angular/core';
import { MenuOptions } from '../../enums/menuOptions.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output('changeMenu') emitter = new EventEmitter<MenuOptions>();
  collapsed = true;
  menu = MenuOptions;

  onClick(option: MenuOptions){
    this.emitter.emit(option);
  }
}
