import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
})
export class SearchComponent {
  @Output() callbackData = new EventEmitter();

  src = '';

  constructor() {}

  callSearch(term: any): void {
    if (term.length >= 3) {
      this.callbackData.emit(term);
    }
  }
}
