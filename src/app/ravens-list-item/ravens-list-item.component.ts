import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-ravens-list-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    DatePipe,
    MatListModule
  ],
  templateUrl: './ravens-list-item.component.html',
  styleUrl: './ravens-list-item.component.css'
})
export class RavensListItemComponent {
  @Input() item: any;

}
