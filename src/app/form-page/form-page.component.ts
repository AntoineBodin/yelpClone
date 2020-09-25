import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { ApiAccessService } from '../api-access.service';
import { CustomResponse } from '../custom-response';
import { FormsModule, NgForm } from '@angular/forms';
import { Business } from '../business';
import { UserInputs } from '../user-inputs';
import { LocationServiceService } from '../location-service.service'

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  @Output() formOutput = new EventEmitter<UserInputs>(); 
  radiusDisplayValue : string;

  locationAvailable : boolean = true;

  userInputs: UserInputs = {
    term: "",
    location: "",
    longitude: "",
    latitude: "",
    radius: "2000",
    price: "all"
  }
  
  constructor(private locationService: LocationServiceService) {}

  ngOnInit(): void {
    this.locationService.getLocation().then(pos => {
      window.localStorage.setItem("Longitude", pos.lng);
      window.localStorage.setItem("Latitude", pos.lat)
    })
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  formSubmission(userInputs: NgForm) : void {
    if (userInputs.value.location)
      this.userInputs.location = userInputs.value.location;
    if (userInputs.value.term)
      this.userInputs.term = userInputs.value.term;
    if (userInputs.value.radius)
      this.userInputs.radius = userInputs.value.radius;
    if (userInputs.value.price)
      this.userInputs.price = userInputs.value.price;

    this.formOutput.emit(this.userInputs)
  }


}
