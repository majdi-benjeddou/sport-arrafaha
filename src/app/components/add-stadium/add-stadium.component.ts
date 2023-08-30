import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stadium } from 'src/app/data/data';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumForm: FormGroup;
  stadium: any={};
  id: number;
  stadiumTab: any= stadium;
  constructor(
    private stadiumBuilder: FormBuilder,
    private stadiumService: StadiumService,
    private stadiumRoute: Router) { }

  ngOnInit() {
    this.stadiumForm = this.stadiumBuilder.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    capacity: ["", [Validators.required, Validators.minLength(3)]],
    country: [""],
    
  });    

  }
  addStadium(){ 
    console.log("here object", this.stadium)
    this.stadiumService.addStadium(this.stadium).subscribe((data) =>{
      console.log("here response from BE", data.msg);
      this.stadiumRoute.navigate(["admin"]);
    })
  }
generateId(T:any) {
  if (T.length == 0) {
      return 1;
  }
  else {
      var max = T[0].id;
      for (let i = 1; i < T.length; i++) {
          if (T[i].id > max) {
              max = T[i].id;
          }
      }
      return max;
  }
}
  }

  
