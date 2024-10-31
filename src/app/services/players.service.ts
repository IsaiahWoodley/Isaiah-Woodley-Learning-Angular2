import { Injectable } from '@angular/core';
import {Team, TEAMS} from '../model/data/mock-content';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }
  getTeams(): Observable<Team[]> {
    return of(TEAMS); // Use 'of' to return an Observable
  }
  getTeamById(id: number): Observable<Team | undefined> {
    const team = TEAMS.find(item => item.Id === id); // Find the team by ID
    return of(team); // Return the found team as an Observable
  }
  addTeam(newTeam: Team):Observable<Team[]> {
    TEAMS.push(newTeam);
    return of(TEAMS);
  }
  updateTeam(updatedTeam: Team): Observable<Team[]> {
    const index = TEAMS.findIndex(item => item.Id === updatedTeam.Id);
    if (index !== -1) {
      TEAMS[index] = updatedTeam;
    }// Update the existing team
      return of(TEAMS);
    }

  deleteTeam(id: number): Observable<Team[]> {
    const updateTeam = TEAMS.filter(item => item.Id !== id);
    return of(updateTeam);
  }
}
