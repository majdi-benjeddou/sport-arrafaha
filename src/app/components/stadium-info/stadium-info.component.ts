import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stadium } from 'src/app/data/data';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {
  id:any;
  stadium:any;
  constructor(private activatedpath: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedpath.snapshot.paramMap.get("id");
    // console.log(this.id);
    
    this.id = this.stadium.find((element) => {
      return (this.id = this.id);
    });
  }

}
