import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SocketIoModule } from 'ngx-socket-io';
import { MiltronCommonModule } from '../miltron-common/miltron-common.module';
import { RocketPayloadComponent } from './components/rocket-payload/rocket-payload.component';
import { RocketStatsComponent } from './components/rocket-stats/rocket-stats.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { RocketRoutingModule } from './rocket-routing.module';



@NgModule({
  declarations: [
    RocketsComponent,
    RocketComponent,
    RocketPayloadComponent,
    RocketStatsComponent
  ],
  imports: [
    CommonModule,
    RocketRoutingModule,
    MiltronCommonModule,
    MatCardModule,
    SocketIoModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class RocketModule { }
