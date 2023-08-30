import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
id;
obj= {};
  constructor( 
    private teamRouter: ActivatedRoute,
    private teamService: TeamService) { }

  ngOnInit() {
    this.id = this.teamRouter.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe((response) => {
      this.obj = response.team;
    });
  }

}
