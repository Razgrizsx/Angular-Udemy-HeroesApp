import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from 'interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
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

  getSugerencias(termino : string){
    return this.http.get<Heroe[]>(`${environment.url}?q=${termino}&_limit=6`)
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${environment.url}`, heroe)
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${environment.url}/${heroe.id}`, heroe)
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<Heroe>(`${environment.url}/${id}`)
  }
}
