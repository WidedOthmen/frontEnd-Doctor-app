import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{AuthUserService} from '../service/auth-user.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted=false;
  constructor(private router:Router,private formbuilder:FormBuilder, private auth:AuthUserService) { }

  ngOnInit(): void {
    this.loginForm= this.formbuilder.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.auth.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);

      this.router.navigate(['home'])
    })
  };
  get f(){
    return this.loginForm.controls;
  }
  navigateToRegister(){
    this.router.navigate(['register'])
  };
  // navigateToReset(){
  //   this.router.navigate(['resetPassword'])
  // };
}
