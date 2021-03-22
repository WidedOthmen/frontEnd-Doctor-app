import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import{AuthUserService} from '../app/service/auth-user.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private auth:AuthUserService,private router:Router){}

  canActivate(): boolean {
    if(this.auth.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }


}
