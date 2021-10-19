import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService {


  endpoint = 'weather'
  constructor() {
    super();
  }


  getWeather() {
    return this.get<Weather>(this.endpoint)
  }
}
