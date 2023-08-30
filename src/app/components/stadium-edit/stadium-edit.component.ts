import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stadium } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-edit',
  templateUrl: './stadium-edit.component.html',
  styleUrls: ['./stadium-edit.component.css']
})
export class StadiumEditComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  stadiumTab: any= stadium;
  stadium: any= {};
    constructor() { }
  
    ngOnInit() {
      this.id = JSON.parse(localStorage.getItem("stadiumId"));
      for (let i = 0; i < this.stadiumTab.length; i++) {
        if (this.stadiumTab[i].id == this.id) {
          this.stadium = this.stadiumTab[i];
          break;
        }
        
      }
  
    }
  Validate(){}
  }
  
