import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router : Router, private authService : AuthService){}
  

  get auth(){
    return this.authService.auth
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["/auth/login"])
  }

}
