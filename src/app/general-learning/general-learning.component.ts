import { Component } from '@angular/core';

@Component({
  selector: 'app-general-learning',
  templateUrl: './general-learning.component.html',
  styleUrl: './general-learning.component.css'
})
export class GeneralLearningComponent {
  username='username';

  useNameIsNull(): boolean {
    return this.username === ''
  }
}
