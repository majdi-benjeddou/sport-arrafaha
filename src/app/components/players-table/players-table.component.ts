import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { players } from "src/app/data/data";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  playerstab ;
  constructor(
    private playerRouter: Router,
    private playerService: PlayerService) {}

  ngOnInit() {
    this.reloadDataPlayer();
  }
  display(x) {
    this.playerRouter.navigate([`playerinfo/${x}`]);
  }
  edit(id: number) {
    localStorage.setItem("playerId", JSON.stringify(id));
    this.playerRouter.navigate(["editplayer"]);
  }
  delete(x) {
    //alert(`player n ${x} delete`);
    this.playerService.deletePlayer(x).subscribe(
      (response) =>{
        console.log("here response after delete", response.msg);
        this.reloadDataPlayer();
      }
    )
  }
  reloadDataPlayer(){
    this.playerService.getAllPlayers().subscribe(
      // response: retour de service
      (response)=>{
        console.log("here response from BE", response);
        this.playerstab = response.players;
      });
  }
}
