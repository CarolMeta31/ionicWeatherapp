import { ServiceWeatherProvider } from './../../providers/service-weather/service-weather';
import { Component } from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;
value:string;
city: string;
main:string;
description:string;
temperature:number;
humidity:number;
date:number;
windSpeed:number;
  location:string;
  
  constructor(public navCtrl: NavController,
    private services:ServiceWeatherProvider,private alertCtrl:AlertController) {

  }


  ionViewDidLoad(){
   
   
  }
  getweatherLocation(value:any){

    this.services.getWeather(this.city).subscribe(result=>{
      
      this.weather=result;
      this.main=this.weather.weather[0].main;
      this.description= this.weather.weather[0].description;
  
      this.temperature= this.weather.main.temp-273.15;
      this.humidity= this.weather.main.humidity;
  
      this.windSpeed= this.weather.wind.seed;
  
      this.date= this.weather.dt;
  

      // if(this.city===null){
      //   this.city
      //   const alert = this.alertCtrl.create({
      //     title:'There is no such city,Please add in the correct city',
          
      //     buttons:[
      //       {
      //         text:'ok',
      //         role:'ok'
              
      //       }
      //     ]
      //     });
      //     alert.present();
      // }
    
        
      
      console.log('response',result);
    })
   
  
}

}

