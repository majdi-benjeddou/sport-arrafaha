import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  tablematch: any;
  findeMatch: any;
  constructor(private activateRoute :ActivatedRoute,
    private matchesService: MatchService) {}

  ngOnInit() {
    // Get ID from PATH
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.matchesService.getMatchById(this.id).subscribe(
      (data)=>{
        console.log("here object from BE", data);
        this.findeMatch = data.match;
      }
    )
  }
 

}
