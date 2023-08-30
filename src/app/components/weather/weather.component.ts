import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  result ="";
  temp: any;
  humidity: any;
  pressure:any;
  windSpeed :any;
  icon: any;
  constructor(private searchBuilder: FormBuilder,
    private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit() {
    this.weatherForm = this.searchBuilder.group({
      city:[""],
      
    });
  }
  search(){
    console.log("here weather", this.weatherForm.value);
    this.weatherService.searchWeather(this.weatherForm.value).subscribe((data) =>{
      console.log("here response from BE", data.result);
      
      this.temp = data.result.temp;
      this.humidity = data.result.humidity;
      this.pressure = data.result.pressure;
      this.windSpeed  = data.result.windSpeed ;
      this.icon=data.result.icon;

      const iconUrl = `http://openweathermap.org/img/w/${this.icon}.png`;
      // Mettez à jour la source de l'image dans le HTML
      const iconImage = document.getElementById("weatherIcon") as HTMLImageElement;
      iconImage.src = iconUrl;
       
    });
  }
}

