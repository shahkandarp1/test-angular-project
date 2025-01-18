import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-call',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.scss'
})
export class ApiCallComponent implements OnInit {
  weatherForecastData:WeatherForecast[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getWeatherForecastData()
  }

  getWeatherForecastData(){
    this.apiService.getWeatherForecast().subscribe({
      next:(data:WeatherForecast[])=>{
        this.weatherForecastData = data
      },
      error:(err:any)=>{}
    })
  }
  
}
