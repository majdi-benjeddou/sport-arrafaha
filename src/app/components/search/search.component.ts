import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nomme',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private searchBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.searchBuilder.group({
      city:[""],
      country:[""],
    });
  }
  search(){
    localStorage.setItem("searchObj", JSON.stringify(this.searchForm.value));
  }
}
