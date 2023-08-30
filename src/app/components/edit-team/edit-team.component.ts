import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { teams } from 'src/app/data/matches';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  editForm: FormGroup;
id: number;
teamTab: any= teams;
team: any= {};
  constructor() { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("teamId"));
    for (let i = 0; i < this.teamTab.length; i++) {
      if (this.teamTab[i].id == this.id) {
        this.team = this.teamTab[i];
        break;
      }
      
    }

  }
Validate(){}
}
