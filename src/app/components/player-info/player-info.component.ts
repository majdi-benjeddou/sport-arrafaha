import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-player-info",
  templateUrl: "./player-info.component.html",
  styleUrls: ["./player-info.component.css"],
})
export class PlayerInfoComponent implements OnInit {
  constructor(private playerRouter: ActivatedRoute, private playerService: PlayerService) {}
  id: any;
  obj={};
  ngOnInit(){
    this.id = this.playerRouter.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe((response) => {
      this.obj = response.player;
    });
  }
}
