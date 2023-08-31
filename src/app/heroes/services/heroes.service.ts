import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http : HttpClient) { }

  getHeroes(){
   return this.http.get<Heroe[]>(environment.url)
  }

  getHeroeporId(id : string){
    return this.http.get<Heroe>(`${environment.url}/${id}`)
  }
}
