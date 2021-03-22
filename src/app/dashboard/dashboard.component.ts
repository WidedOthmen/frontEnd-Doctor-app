import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{DashboradService} from '../service/dashborad.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
firstName:any;
patients;
p:number=1;
term: string;
  constructor( private router : Router , private DashboradService : DashboradService ) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.DashboradService.getAllData().subscribe(res=>{
      console.log(res)
      this.patients=res;
    })
  }
  navigateToformulaire(){
    this.router.navigate(["/formulaireDashborad"])
  }
  navigateToPatientDATA(id){
    this.router.navigate(["/patientData/"+ id])
  }
  logoutUser(){
    localStorage.removeItem('token');
    console.log('distroy')
    this.router.navigate(["/login"])
  }
}
