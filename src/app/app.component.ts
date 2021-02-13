import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number=0;
  lng:number=0;
  zoom:number=0;
  mapTypeId:string="";
  title = 'Mapa';

  constructor(){
    this.lat=40;
    this.lng=-3;
    this.zoom=6;
    this.mapTypeId="hybrid";
  }
}
