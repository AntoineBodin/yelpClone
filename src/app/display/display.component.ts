import { Component, OnInit } from '@angular/core';
import { ApiAccessService } from '../api-access.service';
import { UserInputs } from '../user-inputs';
import { Business } from '../business';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  output : Business[];

  constructor(private  apiAccessService : ApiAccessService) { }

  ngOnInit(): void {
  }

  refresh(userInputs: UserInputs): void {
    if (!userInputs.location) {
      userInputs.longitude = localStorage.getItem("Longitude");
      userInputs.latitude = localStorage.getItem("Latitude");
      
      console.log("location is undefined, used geolocation");
      //return;
    }
    console.log(userInputs);
    console.log("location is " + userInputs.location);
    this.output = [];
    this.apiAccessService.getResponseFromNetwork(userInputs).subscribe(
      json => {
        this.output = json.businesses;
        this.output.forEach(
          business => {
            console.log(business)
          } 
          )
      }
    );
  }

}
