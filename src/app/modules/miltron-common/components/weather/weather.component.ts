import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';
import { getDegreeFromDirection } from './../../../../utils/direction';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() width: number = 500;

  weather!: Weather;

  degree: number = 0;

  // directions = { N: 'N', S: 'S', E: 'E', W: 'W', NE: 'NE', NW: 'NW', SE: 'SE', SW: 'SW' }

  constructor(private weatherService: WeatherService) { }

  setDegree() {
    this.degree = getDegreeFromDirection(this.weather?.wind?.direction)
  }

  ngOnInit(): void {
    this.loadData()
    setInterval(() => {
      this.loadData()
    }, 6000)
  }

  loadData() {
    this.weatherService.getWeather()
      .then(resp => {
        this.weather = resp
        this.setDegree()
      })
  }

}
