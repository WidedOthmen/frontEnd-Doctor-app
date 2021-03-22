import { Component, OnInit, TemplateRef } from '@angular/core';
import{ ActivatedRoute, Router} from '@angular/router';
import{DashboradService} from '../service/dashborad.service';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {
modalRef:BsModalRef;
patientId;
patient;
  constructor( private ActivatedRoute:ActivatedRoute, private router: Router ,
    private DashboradService:DashboradService , private modalService:BsModalService)
    {
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
    }

  ngOnInit(): void {
    console.log('patientId: ', this.patientId);
    this.getOnePatient()
  }
  getOnePatient(){
    this.DashboradService.getOneData(this.patientId).subscribe(data=>{
      this.patient = data;
    })
  }
  deletPatient(id){
    this.DashboradService.deleteData(id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/home'])
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }

  modifyPatient(){
    this.DashboradService.updateData(this.patient._id,this.patient).subscribe(res=>{
      console.log(res);
    },
    error => {
      console.log(error);
    });
    window.location.reload()
  }

  onReset(){
    this.modalRef.hide();
  }





  navigateToFormulaire(){
    this.router.navigate(["/formulaire/"+ this.patientId]);
  }
  navigateToFamily(){
    if(this.patientId.length > 0){
       //getOneFamily (patientId)
      this.router.navigate(["/familleTable/"+ this.patientId])
    }
    else if(this.patientId.length == 0){
      this.router.navigate(["/formulaireFamilleTable/"+ this.patientId])
    }
  }
  navigateToProphylaxie(){
    if(this.patientId.length > 0){
      this.router.navigate(["/observ/"+ this.patientId])
    }
    else if(this.patientId.length == 0){
     this.router.navigate(["/observFormulaire/"+ this.patientId])
    }
  }

  navigateToExamen(){
    this.router.navigate(["/examenFormulaire/"+ this.patientId])
  }

  navigateToNFS(){
    this.router.navigate(["/nfsFormulaire/"+ this.patientId])
  }

  navigateToTableauTR(){
    if(this.patientId.length > 0){
      this.router.navigate(["/tableauTransfusionnel/"+ this.patientId])
    }
    else if(this.patientId.length == 0){
      this.router.navigate(["/'formulairTransfusionnel/"+ this.patientId])
    }
  }

  navigateToBilanTrimestriel(){
    if(this.patientId.length > 0){
      this.router.navigate(["/bilanTrimestriel/"+this.patientId])
    }
    else if(this.patientId.length == 0){
      this.router.navigate(["/formulairTrimestriel/"+ this.patientId])
    }
  }

  navigateToBilanSemestriel(){
    if(this.patientId.length > 0){
      this.router.navigate(["/bilanSemestriel/"+this.patientId])
    }
    else if(this.patientId.length == 0){
      this.router.navigate(["/formulairSemestriel/"+ this.patientId])
    }

  }

  navigateToBilanAnnuel(){
    if(this.patientId.length > 0){
      this.router.navigate(["/bilanAnnuel/"+this.patientId])
    }
    else if(this.patientId.length == 0){
      this.router.navigate(["/formulairAnnuel/"+ this.patientId])
    }
  }
  logoutUser(){
    localStorage.removeItem('token');
    console.log('distroy')
    this.router.navigate(["/login"])
  }

}
