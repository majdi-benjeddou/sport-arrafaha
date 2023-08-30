import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user : any={};
  constructor( private router: Router) { }

  ngOnInit() {
//     if (this.isLoggedIn()){
//       // if (this.isLoggedIn()) == true
// const jwt = sessionStorage.getItem("token");
// this.user = this.decodeToken(jwt);
//     }
  }
  isLoggedIn(){
    const jwt = sessionStorage.getItem('token');
    // console.log("here jwt", jwt);
    if (jwt) {
      this.user = this.decodeToken(jwt);
    }
    return !!jwt;
    
}
decodeToken(token: string) {
  return jwt_decode(token);
  }
  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(["subscription"])
    }
}
