import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from "../../services/player.service";

@Component({
  selector: "app-search-player",
  templateUrl: "./search-player.component.html",
  styleUrls: ["./search-player.component.css"],
})
export class SearchPlayerComponent implements OnInit {
  searchPlayerForm: FormGroup;
  players: any;

  constructor(
    private playerService: PlayerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.searchPlayerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      age: [""],
    });
  }

  search() {
    this.playerService
      .searchPlayer(this.searchPlayerForm.value)
      .subscribe((result) => {
        console.log("here result from BE", result.players);
        this.players = result.players;
        //this.players:result Front End
        //result.players:result Back End
      });
  }
}
