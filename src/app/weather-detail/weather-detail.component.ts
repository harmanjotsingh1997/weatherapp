import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  @Input() date: Date;
  @Input() cityName: string;
  @Input() countryName: string;
  @Input() temperature: number;
  @Input() humidity: number;
  @Input() description: string;
  @Input() wind: string;
  @Input() iconUrl: any;

  constructor() {}
  ngOnInit() {}
}
