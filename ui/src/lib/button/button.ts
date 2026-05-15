import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  template: `<button class="shared-btn"><ng-content></ng-content></button>`,
  styles: [`
    .shared-btn {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .shared-btn:hover {
      background-color: #0056b3;
    }
  `]
})
export class Button {}
