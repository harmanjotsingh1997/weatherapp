import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';

  city: string;
  cityName: string;
  countryName: string;
  date: Date;
  temperature: number;
  humidity: number;
  description: string;
  wind: number;
  icon: string;
  iconUrl: string;

  public result = new Array();

  constructor(private weather: WeatherService) {}

  ngOnInit() {}
  receiveCityName($event) {
    this.city = $event;
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    console.log();
    this.weather.getWeatherData(this.city).subscribe(
      d => {
        //console.log(this.detail);
        const obj = JSON.parse(d);
        //console.log(obj);
        this.cityName = obj.city.name;
        this.countryName = obj.city.country;
        this.date = obj.list[0].dt_txt.split(' ')[0];
        this.temperature = obj.list[0].main.temp;
        this.humidity = obj.list[0].main.humidity;
        this.description = obj.list[0].weather[0].description;
        this.icon = obj.list[0].weather[0].icon;
        this.iconUrl = `https://openweathermap.org/img/w/${this.icon}.png`;
        this.wind = obj.list[0].wind.speed;
        this.result = [];
        let p = this.date;
        this.result.push(obj.list[0]);
        for (let index = 1; index < 40; index++) {
          let q = obj.list[index].dt_txt.split(' ')[0];
          // console.log('q is '+q);
          if (p != q) {
            this.result.push(obj.list[index]);
            p = q;
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
