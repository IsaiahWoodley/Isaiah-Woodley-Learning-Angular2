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
}
