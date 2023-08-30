import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  @Input() heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => console.log(id))
  }

}
