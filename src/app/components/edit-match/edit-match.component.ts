import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { T } from 'src/app/data/matches';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
// form Id (identifiant )
editForm: FormGroup;
id: number;
// object
match: any = {};
  constructor(private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("matchId"));
    // console.log('here id', this.id);
    this.matchService.getMatchById(this.id).subscribe((data) =>{
      this.match = data.match;
    });
  }

validate(){
  this.matchService.updateMatch(this.match).subscribe((result) =>{
    console.log("here result after update", result);
    this.router.navigate(["admin"]);
  })
}
}
