import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cityName: string;

  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  sendCityName() {
    this.messageEvent.emit(this.cityName);
  }
}
