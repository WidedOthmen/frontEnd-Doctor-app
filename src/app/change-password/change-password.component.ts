import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{ AuthUserService} from '../service/auth-user.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm:FormGroup;
  data:any={};
  constructor(private router:Router ,private formbuilder:FormBuilder, private auth:AuthUserService,private ActivatedRoute:ActivatedRoute) {
    this.ActivatedRoute.params.subscribe(params =>{
      this.data.token=params.data.token,
      this.data.userId=params.data.userId
    })
  }

  ngOnInit(): void {
    // this.changePasswordForm= this.formbuilder.group({
    // password:['', Validators.required]
    // })
  }

  // changePassword(){
  //   this.auth.changePassword(this.data).subscribe(()=>{
  //     console.log('success');
  //   },error =>{
  //     console.log(error);
  //   })
  // }
}
