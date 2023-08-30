import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImcService } from 'src/app/services/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  // form Id (identifiant )
  imcForm: FormGroup;
  imc: any={};// object
  x="";
  constructor(private imcService: ImcService,
    private router: Router) { }

  ngOnInit() {}
    calcul(){
      console.log("here object", this.imc);
      this.imcService.calculImc(this.imc).subscribe((data) =>{
        this.x = data.msg;
        console.log("here response from BE", data.msg);
      });
    }
  
  

}
