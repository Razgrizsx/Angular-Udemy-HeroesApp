import { Component } from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  constructor(private heroeService : HeroesService){}

  binding :string = '' 
  heroes : Heroe[] = []
  heroeSeleccionado! : Heroe 

  buscando(){
    this.heroeService.getSugerencias(this.binding.trim()).subscribe({
      next: (heroes) => {this.heroes = heroes}
    })
  }

  opcionSeleccionada(evento : MatAutocompleteSelectedEvent){
    if(!evento.option.value){return}

    const hero : Heroe = evento.option.value
    this.binding = hero.superhero
    this.heroeService.getHeroeporId(hero.id!)
      .subscribe({
        next: (heroe) => {this.heroeSeleccionado = heroe}
      })
  }
}
