import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player: any={};
addMatchForm: FormGroup;
  constructor(
    private playerService: PlayerService,
    private playerRoute: Router  ) { }

  ngOnInit() {}
  add(){
  console.log("here object ", this.player);
  this.playerService.addPlayer(this.player).subscribe((data) =>{
    console.log("here response from BE", data.msg);
    this.playerRoute.navigate(["admin"]);
    
  })

  }

}
