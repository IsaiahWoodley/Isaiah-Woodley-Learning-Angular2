import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf, PercentPipe, UpperCasePipe} from '@angular/common';
import {RavensListItemComponent} from '../ravens-list-item/ravens-list-item.component';
import {Team, TEAMS} from '../model/data/mock-content';
import {PlayersService} from '../services/players.service';
import {FullTeamName} from '../pipes/full-TeamName';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

import {FormsModule} from '@angular/forms';
import {AppHighlightOnFocusDirective} from '../directives/app-highlight-on-focus.directive';


@Component({
  selector: 'app-ravens-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RavensListItemComponent,
    UpperCasePipe,
    DatePipe,
    PercentPipe,
    FullTeamName,
    HoverHighlightDirective,
    FormsModule,
    AppHighlightOnFocusDirective
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

      },
      (error) => {
        console.error('Error fetching teams by ID:', error);
      });
  }

  addTeam(): void {
    const newTeam: Team = {
      Id: 5,
      City: 'Miami',
      Team: 'Dolphins',
      HeadCoach: 'Mike McDaniel',
      firstWin: 'Oct. 16, 1966',
      winPercent: '0.25'
    };
    this.playersService.addTeam(newTeam).subscribe((updatedTeam: Team[]) => {
        this.DivisionTeams = updatedTeam;
      },
      (error) => {
        console.error('Error adding team:', error);
      });
  }

//t
  UpdateTeam(): void {
    const updatedTeam: Team = {
      Id: 1, // ID of the team to update
      City: 'Updated City',
      Team: 'Updated Team',
      HeadCoach: 'Updated Coach',
      firstWin: '',
      winPercent: ''

    };

    this.playersService.updateTeam(updatedTeam).subscribe(result => {
        if (result) {
          console.log('Team updated:', result);
          this.team();
        }
      },
      (error) => {
        console.error('Error updating team:', error);
      });
  }

  deleteTeam(id: number): void {
    this.playersService.deleteTeam(id).subscribe(updatedTeams => {
        this.DivisionTeams = updatedTeams;
        console.log(`Team with ID ${id} deleted`);
      },
      (error) => {
        console.error('Error deleting team:', error);
      });
  }

  onSubmit() {
    const newTeam = {
      Id: this.DivisionTeams.length + 1, // Generate a new ID
      TeamName: 'New Team', // Replace with form value
      HeadCoach: 'New Coach', // Replace with form value
      firstWin: new Date(), // Replace with form value
      winPercent: 0.5, // Replace with form value
    };
  }
}
