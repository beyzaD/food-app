import { Injectable } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private hubConnection: SignalR.HubConnection;
  events: string[] = [];

  constructor() {
    // Create connection
    this.hubConnection = new SignalR.HubConnectionBuilder()
      .withUrl(environment.azure.signalREndpoint)
      .build();

    // Start connection. This will call negotiate endpoint
    this.hubConnection.start();

    this.hubConnection.on('foodEvent', (event: any) => {
      console.log('received event', event);
      this.events.push(event);
    });
  }
}
