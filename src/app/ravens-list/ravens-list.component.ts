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

  constructor(private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.team();
  }
  team(): void {
    this.playersService.getTeams().subscribe((teams: Team[]) => {
      this.DivisionTeams = teams;
    });
  }
  fetchTeamById(id: number): void {
    this.playersService.getTeamById(id).subscribe((team: Team | undefined) => {

    });
  }

  addTeam(): void {
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

  updateTeam(): void {
    const updatedTeam: Team = {
      Id: 1, // ID of the team to update
      City: 'Updated City',
      Team: 'Updated Team',
      HeadCoach: 'Updated Coach'
    };

    this.playersService.updateTeam(updatedTeam).subscribe(result => {
      if (result) {
        console.log('Team updated:', result);
        this.team();
      }
    });
  }

  deleteTeam(id: number): void {
    this.playersService.deleteTeam(id).subscribe(updatedTeams => {
      this.DivisionTeams = updatedTeams;
      console.log(`Team with ID ${id} deleted`);
    });
  }
}
