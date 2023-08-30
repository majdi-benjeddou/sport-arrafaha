import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  actualDate: Date = new Date();

@Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
