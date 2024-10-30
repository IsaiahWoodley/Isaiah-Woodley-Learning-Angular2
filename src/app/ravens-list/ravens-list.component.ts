import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RavensListItemComponent} from '../ravens-list-item/ravens-list-item.component';
import {Team, TEAMS} from '../model/data/mock-content';

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
    DivisionTeams: Team[] = TEAMS;
}
