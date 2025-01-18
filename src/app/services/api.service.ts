import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherForecast } from '../interfaces/weather-forecast.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeatherForecast():Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(`${environment.baseUrl}WeatherForecast`);
  }
}
