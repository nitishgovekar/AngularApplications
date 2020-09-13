import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    serverId :number=7;
    serverStatus :string="Offline Mode";

    getServerStatus(){
        return this.serverStatus;
    }
}