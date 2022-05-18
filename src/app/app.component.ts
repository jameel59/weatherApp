import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService ){ }
  
  weatherData?: WeatherData;
  cityName:string ='Lahore';

  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = '';
  }

  
  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';
  }


  private getweatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (res) => {
        this.weatherData = res;
        //console.log(res);
      }
    }) 
  }

  isTemperatureGreaterThanFifteen() {
    if(this.weatherData) {
      return this.weatherData?.main?.temp > 40;
    }
    return false;
  }
}
