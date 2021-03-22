import { Component, OnInit,TemplateRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{SemestrielService} from '../service/semestriel.service';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-bilan-semestriel',
  templateUrl: './bilan-semestriel.component.html',
  styleUrls: ['./bilan-semestriel.component.css']
})
export class BilanSemestrielComponent implements OnInit {
results;
modalRef:BsModalRef;
patientId;
  constructor(private semestriel:SemestrielService, private modalService:BsModalService,
  private router: Router,private ActivatedRoute:ActivatedRoute)
  {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
  }

  ngOnInit(): void {
    this.getOne()
  }
  getOne(){
    this.semestriel.getOne(this.patientId).subscribe(res=>{
      console.log(res);
      this.results=res
    })
  }
  delete(id){
    this.semestriel.delete(id).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/patientData/'+ this.patientId])
  }
  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }
  onReset(){
    this.modalRef.hide();
  }
  modifyResults(){
    this.semestriel.update(this.results._id,this.results).subscribe(res=>{
      console.log(res)
    },
    error => {
      console.log(error);
    });
    window.location.reload()
  }
  logoutUser(){
    localStorage.removeItem('token');
    console.log('distroy')
    this.router.navigate(["/login"])
  }
  navigateToPatient(){
    this.router.navigate(["/patientData/"+ this.patientId])
  }
}

