import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreziapiService {

  API_URL  =  'https://prezi-backend.herokuapp.com';
  constructor(private  httpClient:  HttpClient) { }
  getPrezis(){
    return  this.httpClient.get(`${this.API_URL}/prezi/`);
			}

	searchByTitle(query : String) {
		return  this.httpClient.get(this.API_URL + '/prezi/' + query + '/');
			}
	
}
