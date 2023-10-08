import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gamePrice: string = '';
  @Input()
  gamePlataform: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameImg: string = '';

}
