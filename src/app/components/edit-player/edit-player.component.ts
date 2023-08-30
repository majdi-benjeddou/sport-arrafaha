import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { players } from 'src/app/data/matches';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  // form ID
  editForm: FormGroup;
  id: any;
  // object
  player: any = {};
  constructor(
    private playerService: PlayerService,
    private playerRouter: Router  ) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("playerId"));
    this.playerService.getPlayerById(this.id).subscribe((data) =>{
      this.player = data.player;
    })
  }
validate(){
  this.playerService.updatePlayer(this.player).subscribe((response) =>{
    console.log("here response after update", response);
    this.playerRouter.navigate(["admin"])
  })
}
}
