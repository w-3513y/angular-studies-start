import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-general-learning',
  templateUrl: './general-learning.component.html',
  styleUrl: './general-learning.component.css'
})
export class GeneralLearningComponent {
  username='username'

  users: User[] = [
    new User('marcela', 'Online', 72),
    new User('maria', 'Offline', 88),
    new User('patricia', 'Online', 81),
    new User('wesley', 'Online', 75)
  ]

  userNameIsNull(): boolean {
    return this.username === ''
  }

  findUser(): boolean {
    return this.users.some(u => u.name === this.username.toLowerCase())
  }
}
