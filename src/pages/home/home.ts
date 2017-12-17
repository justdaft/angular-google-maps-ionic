import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title: string = "My first AGM project";

  // home coords =  {lat: 55.87687269106657, lng: -4.193703532218933}
  lat: number = 55.87687269106657;
  lng: number = -4.193703532218933;
  locationChoosen =  false;
  constructor(public navCtrl: NavController) {}

  onChooseLocation(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChoosen = true;
  }
}
