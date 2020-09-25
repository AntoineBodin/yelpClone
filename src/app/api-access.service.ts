import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomResponse } from './custom-response'
import { UserInputs } from './user-inputs'
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {
    constructor(private http: HttpClient) {}

  getResponseFromNetwork(userInputs : UserInputs): Observable<CustomResponse> {
    var url = `https://yelp-bypass.herokuapp.com/?url=https://api.yelp.com/v3/businesses/search?term=${userInputs.term}`
    if (userInputs.location) {
      url += `%26location=${userInputs.location}`;
    }
    else {
      url += `%26longitude=${userInputs.longitude}%26latitude=${userInputs.latitude}`
    }
    url += `%26radius=${userInputs.radius}`;
    if (userInputs.price != "all")
      url += `%26price=${userInputs.price}`;

    console.log(url);
    
    var response =  this.http.get<CustomResponse>(url);
    console.log(response);
    return response;
  }
}
