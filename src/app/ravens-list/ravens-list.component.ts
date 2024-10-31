import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RavensListItemComponent} from '../ravens-list-item/ravens-list-item.component';
import {Team, TEAMS} from '../model/data/mock-content';
import {PlayersService} from '../services/players.service';

@Component({
  selector: 'app-ravens-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RavensListItemComponent
  ],
  templateUrl: './ravens-list.component.html',
  styleUrl: './ravens-list.component.css'
})
export class RavensListComponent {
    DivisionTeams: Team[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getTeams().subscribe((teams: Team[]) => {
      this.DivisionTeams = teams;
    });
  }
  fetchTeamById(id: number): void {
    this.playersService.getTeamById(id).subscribe((team: Team | undefined) => {

    });
  }
  addTeam(): void{
    const newTeam: Team = {
      Id: 5,
      City: 'Miami',
      Team: 'Dolphins',
      HeadCoach: 'Mike McDaniel'
    };
    this.playersService.addTeam(newTeam).subscribe((updatedTeams: Team[]) => {
      this.DivisionTeams = updatedTeams;
    });
  }
}
