import { CanMatchFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';



export const auth2Guard: CanMatchFn = (route, segments) => {
  console.log("Can Match",route, segments)
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
};
