import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";


@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})

export class MatchesTableComponent implements OnInit {
  matchestab: any = [];
  pageOfItems: Array<any>;
  constructor(
    private router: Router,
    private matcheService: MatchService ) {}

  ngOnInit() {
    // response: array of objects
    this.reloadData();
  }
  
  display(x) {
    // methode pour affich les information
    this.router.navigate([`matchinfo/${x}`]);
  }
  edit(id: number) {
    localStorage.setItem("matchId", JSON.stringify(id));
    this.router.navigate(["editmatch"]);
  }
  delete(x: number) {
    alert(`match N° ${x} delete`);
    this.matcheService.deleteMatch(x).subscribe(
      (response) =>{
        console.log("here response after delete", response.msg);
        this.reloadData();
      }
    )
  }
  reloadData(){
    this.matcheService.getAllMatches().subscribe(
      // response: retour de service
      (response)=>{
        console.log("here response from BE", response);
        this.matchestab = response.matches;
      });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }   
}
