import { Component, Input, OnInit } from '@angular/core';
import { Rocket, Status } from '../../models/rocket';
import { RocketService } from '../../services/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  @Input() rocket!: Rocket;
  @Input() status!: string

  //TODO : this can be an global variable via services
  isWaiting = false
  constructor(private rocketService: RocketService) { }

  ngOnInit(): void {
  }


  launch(rocket: Rocket) {
    this.isWaiting = true
    this.rocketService.launchRocket(rocket.id).then(resp => {
      this.rocket.statusType = <Status>resp.status
      this.rocket.status = resp.status
      this.isWaiting = false
      //this.rockets.map(r => { if (r.id === resp.id) r.status = 'launched' })
    }).catch(err => {
      this.isWaiting = false
    })
  }
  deploy(rocket: Rocket) {
    this.isWaiting = true
    this.rocketService.deployRocket(rocket.id).then(resp => {
      this.rocket.statusType = <Status>resp.status
      this.rocket.status = resp.status
      this.isWaiting = false
      // this.rockets.map(r => { if (r.id === resp.id) r.status = 'deployed' })
    }).catch(err => {
      this.isWaiting = false
    })
  }
  cancel(rocket: Rocket) {
    this.isWaiting = true
    this.rocketService.cancelRocket(rocket.id).then(resp => {
      this.rocket.statusType = <Status>resp.status
      this.rocket.status = resp.status
      this.isWaiting = false
      // this.rockets.map(r => { if (r.id === resp.id) r.status = 'cancelled' })
    }).catch(err => {
      this.isWaiting = false
    })
  }

}
