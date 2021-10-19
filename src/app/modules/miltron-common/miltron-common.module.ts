import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StatusComponent } from './components/status/status.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MiltronCommonRoutingModule } from './miltron-common-routing.module';


@NgModule({
  declarations: [
    WeatherComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    MiltronCommonRoutingModule,
    MatCardModule
  ],
  exports: [WeatherComponent, StatusComponent]
})
export class MiltronCommonModule { }
