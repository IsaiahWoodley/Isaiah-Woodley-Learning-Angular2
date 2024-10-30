import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ravens-list-item',
  standalone: true,
  imports: [],
  templateUrl: './ravens-list-item.component.html',
  styleUrl: './ravens-list-item.component.css'
})
export class RavensListItemComponent {
  @Input() item: any;

}
