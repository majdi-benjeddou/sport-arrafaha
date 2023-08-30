import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { T } from "src/app/data/teams";

@Component({
  selector: "app-team-table",
  templateUrl: "./team-table.component.html",
  styleUrls: ["./team-table.component.css"],
})
export class TeamTableComponent implements OnInit {
  teamTab: any = T;

  constructor(private teamRouter: Router) {}

  ngOnInit() {}
  displayTeam(id: number) {
    // alert(`Team N ${id} is display`);
    this.teamRouter.navigate(["team-info"])
  }
  updateTeam(id: number) {
    this.teamRouter.navigate(["edit-team"])
  }
  deleteTeam(id: number) {
    alert(`Team N ${id} is delete`);
  }
}
