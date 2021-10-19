import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BaseService } from 'src/app/core/service/base.service';
import { Rocket } from '../models/rocket';
@Injectable({
  providedIn: 'root'
})
export class RocketService extends BaseService {

  endpoint = 'rocket'
  constructor(private socket: Socket) {
    super();
  }


  rocketsData = this.socket.fromEvent<Rocket>('rocket.data')
  statusData = this.socket.fromEvent<Rocket>('rocket.status')


  getRockets() {
    const url = 'rockets'
    return this.get<Array<Rocket>>(url)
  }

  launchRocket(id: string) {
    const url = `${this.endpoint}/${id}/status/launched`
    return this.put<Rocket>(url)
  }

  deployRocket(id: string) {
    const url = `${this.endpoint}/${id}/status/deployed`
    return this.put<Rocket>(url)
  }
  cancelRocket(id: string) {
    const url = `${this.endpoint}/${id}/status/launched`
    return this.del<Rocket>(url)
  }

}
