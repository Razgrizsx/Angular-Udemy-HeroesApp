import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
constructor(private heroesService : HeroesService){}

  heroes : Heroe[] = []

  ngOnInit():void {

    console.log(environment)
    this.heroesService.getHeroes()
      .subscribe(
        {
          next: res => this.heroes = res,
          error: err => console.log(err)
        }
      )

  }
}
