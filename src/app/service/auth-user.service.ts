import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http:HttpClient) { }
  register(data){
    return this.http.post(environment.url + "/auth/signup",data)
  }
  login(data){
    return this.http.post(environment.url + '/auth/signin',data)
  }
  resetPassword(data){
    return this.http.post(environment.url + '/auth/forgot-password',data)
  }
  changePassword(data){
    return this.http.put(environment.url + '/auth/resetPassword',data)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
