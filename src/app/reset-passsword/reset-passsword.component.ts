import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{ AuthUserService} from '../service/auth-user.service';

@Component({
  selector: 'app-reset-passsword',
  templateUrl: './reset-passsword.component.html',
  styleUrls: ['./reset-passsword.component.css']
})
export class ResetPassswordComponent implements OnInit {
  resetForm:FormGroup;

  constructor(private router:Router ,private formbuilder:FormBuilder, private auth:AuthUserService) { }

  ngOnInit(): void {
    // this.resetForm= this.formbuilder.group({
    //   email:['', Validators.required]
    // })
  }

  // reset(){
  //   this.auth.resetPassword(this.resetForm.value).subscribe(res=>{
  //     console.log(res)
  //     console.log('check email to change password');
  //   })
  // };
}
