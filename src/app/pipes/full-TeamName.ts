import { Pipe, PipeTransform } from '@angular/core';
import {Team, TEAMS} from '../model/data/mock-content';
@Pipe({
  name: 'TeamName',
  standalone: true
})
export class FullTeamName implements PipeTransform {
  transform(team: Team): string {
    return `${team.City} ${team.Team}`;
  }
}
