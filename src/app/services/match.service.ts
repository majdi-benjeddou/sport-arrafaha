import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // BE adress
  matchURL:  string= "http://localhost:3000/matches"
  // constructor cest une classe
  constructor( private http: HttpClient) { }

  // request to get all matches
  getAllMatches(){
        //<{matches: string}>: type de retour de BE
    return this.http.get<{ matches: any}>(this.matchURL);
  }
// request to get (recuperer) match by ID
  getMatchById(id){
    // return this.http.get(this.matchURL + "/" + id);
    return this.http.get<{match: any, msg: string}>(`${this.matchURL}/${id}`);
  }

    // request to delete match by ID
  deleteMatch(id){
    return this.http.delete<{ msg: string}>(`${this.matchURL}/${id}`);
  }

  // request to add (envoyer) match
  addMatch(obj){
    return this.http.post<{ msg: string}>(this.matchURL, obj);
  }
  // request to edite(modifier) match
  updateMatch(obj){
    return this.http.put<{msg: string}>(this.matchURL, obj);
  }

}
