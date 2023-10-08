import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent {

  @Input()
  gamePrice: string = 'R$ 259,99';
  @Input()
  gamePlataform: string = 'PC | PS5';

}
