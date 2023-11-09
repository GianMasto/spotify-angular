import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
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
