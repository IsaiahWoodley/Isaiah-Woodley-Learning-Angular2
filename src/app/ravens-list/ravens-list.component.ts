import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-ravens-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './ravens-list.component.html',
  styleUrl: './ravens-list.component.css'
})
export class RavensListComponent {
    DivisionTeams = [
      {City: 'Pittsburgh', Team: 'Steelers', HeadCoach: 'Mike Tomlin'},
      {City: 'Cincinnati', Team: 'Bengals', HeadCoach: 'Zac Taylor'},
      {City: 'Baltimore', Team: 'Ravens', HeadCoach: 'John Harbaugh'},
      {City: 'Cleveland', Team: 'Browns', HeadCoach: 'Kevin Stefanski'}
    ];
}
