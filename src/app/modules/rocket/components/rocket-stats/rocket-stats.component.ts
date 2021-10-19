import { Component, Input, OnInit } from '@angular/core';
import { Rocket } from '../../models/rocket';

@Component({
  selector: 'app-rocket-stats',
  templateUrl: './rocket-stats.component.html',
  styleUrls: ['./rocket-stats.component.css']
})
export class RocketStatsComponent implements OnInit {

  @Input() rocket!: Rocket
  constructor() { }

  ngOnInit(): void {
  }

}
