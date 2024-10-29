import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './model/user';
import {CommonModule, NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Isaiah-Woodley-Learning-Angular';
  users = [
    { id: 1, firstName: 'Isaiah', lastName: 'Woodley', userName: 'Zeak', isFan: true },
    { id: 2, firstName: 'Maya', lastName: 'Johnson', userName: 'MayaBee', isFan: false },
    { id: 3, firstName: 'Liam', lastName: 'Smith', userName: 'Liamster', isFan: true },
    { id: 4, firstName: 'Ava', lastName: 'Garcia', userName: 'AvaG', isFan: true },
    { id: 5, firstName: 'Ethan', lastName: 'Brown', userName: 'EthanB', isFan: false },
    { id: 6, firstName: 'Sophia', lastName: 'Jones', userName: 'SophiaJ', isFan: true },
  ];
}
