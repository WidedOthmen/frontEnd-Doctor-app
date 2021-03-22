import { Component, OnInit ,TemplateRef } from '@angular/core';
import { ObservService} from '../service/observ.service';
import { ActivatedRoute,Router } from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-obser-page',
  templateUrl: './obser-page.component.html',
  styleUrls: ['./obser-page.component.css']
})
export class ObserPageComponent implements OnInit {
  modalRef:BsModalRef;
  prophy;
  patientId;
  constructor(private prophylaxieService:ObservService, private modalService:BsModalService,
    private router: Router,private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
  }


  ngOnInit(): void {
    console.log('patientId: ', this.patientId);
    this.getOne();
  }
  getOne(){
    this.prophylaxieService.getOne(this.patientId).subscribe(data=>{
      this.prophy = data;
      console.log(this.patientId)
    })
  }
  deleteProphylaxie(id){
    this.prophylaxieService.delete(id).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/patientData/'+this.patientId])
  }
  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }
  onReset(){
    this.modalRef.hide();
  }
  modifyProphylaxie(){
    this.prophylaxieService.update(this.prophy._id,this.prophy).subscribe(res=>{
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
