import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Socket, SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceLocator } from './core/utils/ServiceLocator';
import { MiltronCommonModule } from './modules/miltron-common/miltron-common.module';

export const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {
    path: '/ws',
    transports: ['websocket'],
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    MiltronCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector, private socket: Socket) {
    ServiceLocator.injector = injector
    const connect = this.socket.connect();
    console.log(connect)
    if (connect.connected) {
      console.log('connected')
    }
  }
}
