import { Component, OnInit } from '@angular/core';
import { Rocket, Status } from '../../models/rocket';
import { RocketService } from '../../services/rocket.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  rockets: Array<Rocket> = []
  // statuses: Array<Rocket> = []
  constructor(private rocketService: RocketService) { }

  ngOnInit(): void {
    this.loadData()

    this.rocketService.rocketsData.subscribe(data => {
      this.rockets.map(rocket => {
        if (rocket.id === data.id) {
          rocket.altitude = data.altitude
          rocket.speed = data.speed
          rocket.acceleration = data.acceleration
          rocket.thrust = data.thrust
          rocket.temperature = data.temperature
          //TODO : this is not correct wat to do it. This is a workaround. Get status from backend
          rocket.connectionStatus = 'connected'
        }
      })
    })


    this.rocketService.statusData.subscribe(data => {
      this.rockets.map(rocket => {
        if (rocket.id === data.id) {
          rocket.connectionStatus = data.status
          if (data.status === 'closed')
            this.loadData()
        }
      })
    })


  }

  loadData() {
    this.rocketService.getRockets()
      .then(rockets => {
        this.rockets = rockets.map(rocket => {
          rocket.connectionStatus = 'closed';
          rocket.statusType = <Status>rocket.status;
          return rocket
        })
      }
      )
  }
}
