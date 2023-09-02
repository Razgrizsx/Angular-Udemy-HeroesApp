import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth : Auth | undefined

  get auth(){
    return {...this._auth}
  }

  constructor(private http : HttpClient,) { }

  getToken() : Observable<boolean> {
    if(!localStorage.getItem('user')){
      return of(false)
    }
    return this.http.get<Auth>(`${environment.urluser}`)
      .pipe(
        map( auth => {
          this._auth = auth
          return true
        } )
      )
  }

  login(){
    return this.http.get<Auth>(`${environment.urluser}`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(resp => localStorage.setItem("user", resp.id) )
        )
  }

  logout(){
    this._auth = undefined
    localStorage.removeItem("user")
  }

}
