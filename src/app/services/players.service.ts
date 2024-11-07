import { Injectable } from '@angular/core';
import {Team, TEAMS} from '../model/data/mock-content';
import {catchError, Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiUrl = 'api/TEAMS';

  constructor(private http: HttpClient) { }
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  getTeamById(id: number): Observable<Team | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Team>(url).pipe(catchError(this.handleError));
  }
  addTeam(newTeam: Team):Observable<Team> {
    return this.http.post<Team>(this.apiUrl, newTeam).pipe(catchError(this.handleError));
  }
  updateTeam(updatedTeam: Team): Observable<Team> {
    const url = `${this.apiUrl}/${updatedTeam.Id}`;
    return this.http.put<Team>(url, updatedTeam).pipe(catchError(this.handleError));
    }

  deleteTeam(id: number): Observable<Team> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Team>(url).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}

