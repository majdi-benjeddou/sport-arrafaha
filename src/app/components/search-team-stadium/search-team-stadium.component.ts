import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stadium, teams } from 'src/app/data/data';
@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {
  searchTeamStadiumForm: FormGroup;
  stadiumsTab: any = stadium;
  teamsTab: any = teams;
  findedTeam: any = {};
  errorMsg: any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.searchTeamStadiumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
    })
  }
  search() {
    let stadiumName = this.searchTeamStadiumForm.value.name;
    let findedStadiumId;
    // search stadium by name and return sadium ID
    for (let i = 0; i < this.stadiumsTab.length; i++) {
      if (this.stadiumsTab[i].name == stadiumName) {
        findedStadiumId = this.stadiumsTab[i].id;
        break;
      }
    }
    console.log("here findedStadiumId , ", findedStadiumId);
    if (findedStadiumId) {
      this.errorMsg = "";
      // search team by stadiumId
      for (let i = 0; i < this.teamsTab.length; i++) {
        if (this.teamsTab[i].stadiumId == findedStadiumId) {
          this.findedTeam = this.teamsTab[i];
          break;
        }
      }
    } else {
      this.errorMsg = "Team Not Found";
    }
  }
}