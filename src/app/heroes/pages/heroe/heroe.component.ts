import { Component, OnInit } from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroeService : HeroesService, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => 
    this.heroeService.getHeroeporId(id)
      .subscribe({next: res => {this.heroe = res} }))
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
}
