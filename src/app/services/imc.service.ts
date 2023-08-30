import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
// BE adress
imcURL:  string= "http://localhost:3000/imcs"
// constructor cest une classe
constructor( private http: HttpClient) { }



// request to add (envoyer) imc
calculImc(obj){
  return this.http.post<{ msg: string}>(this.imcURL, obj);
}


}

