import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL: string= "http://localhost:3000/teams"
  constructor( private http: HttpClient) { }

  getAllTeams(){
    return this.http.get<{teams: any}>(this.teamURL);
  }

  getTeamById(id){
    return this.http.get<{team: any, msg: string}>(`${this.teamURL}/${id}`);
  }

  deleteTeam(id){
    return this.http.delete<{ msg: string}>(`${this.teamURL}/${id}`);
  }

  addTeam(obj){
    return this.http.post<{ msg: string}>(this.teamURL, obj);
  }

  updateTeam(obj){
    return this.http.put(this.teamURL, obj);
  }
}
