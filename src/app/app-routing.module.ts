import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { EditMatchComponent } from "./components/edit-match/edit-match.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { EditTeamComponent } from "./components/edit-team/edit-team.component";
import { EditPlayerComponent } from "./components/edit-player/edit-player.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { BannerComponent } from "./components/banner/banner.component";
import { SearchComponent } from "./components/search/search.component";
import { AddStadiumComponent } from "./components/add-stadium/add-stadium.component";
import { StadiumTableComponent } from "./components/stadium-table/stadium-table.component";
import { StadiumInfoComponent } from "./components/stadium-info/stadium-info.component";
import { SearchTeamStadiumComponent } from "./components/search-team-stadium/search-team-stadium.component";
import { SearchPlayerComponent } from "./components/search-player/search-player.component";
import { ImcComponent } from "./components/imc/imc.component";
import { WeatherComponent } from "./components/weather/weather.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "subscription", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "addmatch", component: AddMatchComponent },
  { path: "addplayer", component: AddPlayerComponent },
  { path: "addteam", component: AddTeamComponent },
  { path: "admin", component: AdminComponent },
  // id is a parametre
  { path: "matchinfo/:id", component: MatchInfoComponent },
  { path: "playerinfo/:id", component: PlayerInfoComponent },
  { path: "editmatch", component: EditMatchComponent },
  { path: "teaminfo/:id", component: TeamInfoComponent },
  { path: "editteam", component: EditTeamComponent },
  { path: "editplayer", component: EditPlayerComponent },
  { path: "teams", component: TeamsComponent },
  { path: "banner", component: BannerComponent},
  {path: "search", component: SearchComponent},
  {path: "add-stadium", component:AddStadiumComponent},
  {path: "stadium-table", component:StadiumTableComponent},
  {path: "stadium-info/:id", component:StadiumInfoComponent},
  {path: "search-team-stadium", component:SearchTeamStadiumComponent},
  {path: "search-player", component:SearchPlayerComponent},
  {path: "imc", component:ImcComponent},
  {path: "waether", component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
