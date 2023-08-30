import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stadium } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadiumTab = JSON.parse(localStorage.getItem("stadium") || "[]");
  constructor(private router:Router) { }

  ngOnInit() {
    this.stadiumTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }
  display(id) {
    this.router.navigate([`stadium-info/${id}`]);
  }
  
  delete(id) {
    for (let i = 0; i < this.stadiumTab.length; i++) {
      if (this.stadiumTab) {
        
      }      
    }
  }
}
