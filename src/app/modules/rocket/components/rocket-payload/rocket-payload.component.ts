import { Component, Input, OnInit } from '@angular/core';
import { Payload } from '../../models/rocket';

@Component({
  selector: 'app-rocket-payload',
  templateUrl: './rocket-payload.component.html',
  styleUrls: ['./rocket-payload.component.css']
})
export class RocketPayloadComponent implements OnInit {

  @Input() payload!: Payload;
  constructor() { }

  ngOnInit(): void {
  }

}
