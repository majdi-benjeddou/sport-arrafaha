import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    // define user object
    user: any = {};
    // define Form ID
    loginForm: FormGroup;
    errorMsg: string;
    constructor(private userService: UserService,
     private router: Router) {}

    ngOnInit() {}

    login() {
    // alert("login clicked");
    console.log("here object", this.user);
    this.userService.login(this.user).subscribe((data) => {
      console.log("here data after login", data);
      console.log("here data after result", data.result);

       if (data.result) {
        sessionStorage.setItem("token", data.result);
        let decodeToken: any = this.decodeToken(data.result);
        console.log("here decodeToken", decodeToken);
        
        decodeToken.role == "admin"
        ?this.router.navigate(["admin"])
        :this.router.navigate([""]);
        // 2 eme methode
        // if (decodeToken.role == "admin") {
        //   this.router.navigate(["admin"]);

        //  }else{
        //   this.router.navigate([""]);
        //  }
       } else {
         this.errorMsg= "please check Email/Pwd";
       }
    });
  }
  // decodage Token
    decodeToken(token: string) {
      return jwt_decode(token);
      }
  }

