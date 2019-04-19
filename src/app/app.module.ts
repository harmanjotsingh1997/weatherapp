import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WeatherDetailComponent,
    WeatherListComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
