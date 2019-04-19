import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() date;
  @Input() icon;
  @Input() description;
  @Input() tempmin;
  @Input() tempmax;
  @Input() humidity;
  iconUrl: string;

  constructor() {}

  getIcon() {
    return `http://openweathermap.org/img/w/${this.icon}.png`;
  }

  ngOnInit() {}
}
