import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  // @Input() title: string;
  signupForm: FormGroup;
  errorMsg: string;
  myPath: string;
  imagePreview: any;
  // FormGroup c'est un class
  // FormBuilder c'est un class
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    // affiche si en click a signup affiche admin ou user
    this.myPath = this.router.url;

    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.maxLength(12)]],
      tel: [""],
      img:[""]
    });
  }
  signup() {
    //     this.myPath == "/subscription"
    // // ? alert("Role: User")
    //     ?(this.signupForm.value.Role = "user")
    //   // :alert("Role: Admin");
    //     :(this.signupForm.value.Role = "admin");
    this.signupForm.value.role =
      this.myPath == "/subscription" ? "user" : "admin";

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      console.log("here data after signup", data.msg);
      if (data.msg == "0") {
        this.errorMsg = "Email exist";
      } else {
        this.router.navigate(["login"]);
      }
    });
    
  }

  onImageSelected(event: Event) {
    //  event: envoyé du html vers .ts
    // Event: cest le type
    const file = (event.target as HTMLInputElement).files[0];
    // target: pointili
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
