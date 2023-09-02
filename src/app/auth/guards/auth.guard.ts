import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('Can Activate',route, state)
  const authService = inject(AuthService)
  const router = inject(Router)
  return authService.getToken()
     .pipe(
      tap( (auth) => {
        if(!auth){
          return router.navigate(["auth/login"])
        }else{
          return true
        }
      })
    ) 
  }
  
  /* if(authService.auth.id){
    return true
  }else{
    return false
  } */
;
