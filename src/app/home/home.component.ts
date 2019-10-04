import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
city=[];
data;
constructor(private apiService:ApiserviceService) {this.city = apiService.data }

  ngOnInit() {
    this.apiService.getWeatherData().subscribe((data)=>{
      console.log(data);
      this.data = data ;
    });
  }

}
