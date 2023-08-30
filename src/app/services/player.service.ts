import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL: string= "http://localhost:3000/players"
  constructor( private http: HttpClient) {}

  // request to get all players
  getAllPlayers(){
    return this.http.get<{ players: any}>(this.playerURL);
  }

  // request to get player by ID
  getPlayerById(id) {
    // 2 Solution
    // return this.http.get(this.playerURL + "/" + id);
    return this.http.get<{ player: any, msg: string}>(`${this.playerURL}/${id}`)
  }

  // request to delete player by ID
  deletePlayer(id){
    return this.http.delete<{ msg: string}>(`${this.playerURL}/${id}`);
  }

  // request to add player
  addPlayer(obj){
    return this.http.post<{ msg: string}>(this.playerURL, obj);
  }

  updatePlayer(obj){
    return this.http.put<{msg: string}>(this.playerURL, obj);
  }

  searchPlayer(obj){
    return this.http.post<{ players: any}>
    (this.playerURL + "/searchPlayer", obj);
  };
}

