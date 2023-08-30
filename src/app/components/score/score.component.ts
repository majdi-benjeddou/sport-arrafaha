import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"],
})
export class ScoreComponent implements OnInit {
  @Input() X: any;
  @Output() matcheOutput: EventEmitter<any> = new EventEmitter();
  myPath: string;
  constructor(private router: Router, private mService: MatchService) {}

  ngOnInit() {
    this.myPath = this.router.url;
  }
  scoreColor(sc1: number, sc2: number) {
    if (sc1 > sc2) {
      return "green";
    } else if (sc1 < sc2) {
      return "yellow";
    } else {
      return "blue";
    }
  }

  scoreForme(scoreOne: any, scoreTwo: any) {
    if (scoreOne > scoreTwo) {
      return true;
    } else {
      return false;
    }
  }
  deleteMatch(id) {
    this.mService.deleteMatch(id).subscribe((data) => {
      console.log("here data", data.msg);
      
      this.mService.getAllMatches().subscribe((response) => {
        console.log("response", response.matches);
        
        this.matcheOutput.emit(response.matches);
      });
    });
  }
}
