import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
stadiumURL: string= "http://localhost:3000/stadium"
  constructor(private http: HttpClient) { }

  // request to get all matches
  getAllStadium(){
    //<{stadium: string}>: type de retour de BE
return this.http.get<{ stadiums: any}>(this.stadiumURL);
}
// request to get (recuperer) stadium by ID
getStadiumById(id){
// return this.http.get(this.stadiumURL + "/" + id);
return this.http.get<{stadium: any, msg: string}>(`${this.stadiumURL}/${id}`);
}

// request to delete stadium by ID
deleteStadium(id){
return this.http.delete<{ msg: string}>(`${this.stadiumURL}/${id}`);
}

// request to add (envoyer) stadium
addStadium(obj){
return this.http.post<{ msg: string}>(this.stadiumURL, obj);
}
// request to edite(modifier) match
updateStadium(obj){
return this.http.put<{msg: string}>(this.stadiumURL, obj);
}
}
