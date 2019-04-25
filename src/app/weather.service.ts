import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(name: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&APPID=8691f94112783ae4233115065f4fc3d2`,
      { responseType: 'text' }
    );
  }
}
