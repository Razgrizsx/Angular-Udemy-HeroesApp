import { Component, Input} from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.css']
})
export class HeroTarjetaComponent{

  @Input() heroe!: Heroe;

  constructor(){}

}
