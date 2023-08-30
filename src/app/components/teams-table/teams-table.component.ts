import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamstab ;
  constructor(
    private teamRouter :Router,
    private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      // response: retour de service
      (response)=>{
        console.log(response.teams)
        this.teamstab = response.teams;
      });
  }
  display(x) {
    this.teamRouter.navigate([`teaminfo/${x}`]);
  }
  edit(id: number) {
    localStorage.setItem("teamId", JSON.stringify(id))
    this.teamRouter.navigate(["editteam"]);
  }
  delete(x) {
    alert(`team n ${x} delete`);
  }
  reloadDataTeam(){
    this.teamService.getAllTeams().subscribe(
      // response: retour de service
      (response)=>{
        console.log(response.teams)
        this.teamstab = response.teams;
      });
  }
}
