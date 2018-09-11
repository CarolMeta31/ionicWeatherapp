import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceWeatherProvider {
   
 
  url='http://api.openweathermap.org/data/2.5/weather?q=';
  appid='&&appid=87ae2472c69e2de01a9611aac49e10ae' ;
  city: string;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceWeatherProvider Provider');
   
  
  }
  getWeather(city: string){
    return this.http.get(this.url+city+',za'+this.appid);
  
  
  }
}
