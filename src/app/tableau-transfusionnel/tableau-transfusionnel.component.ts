import { Component, OnInit ,TemplateRef} from '@angular/core';
import{TableauTransfusionnelService} from '../service/tableau-transfusionnel.service';
import { ActivatedRoute,Router } from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tableau-transfusionnel',
  templateUrl: './tableau-transfusionnel.component.html',
  styleUrls: ['./tableau-transfusionnel.component.css']
})
export class TableauTransfusionnelComponent implements OnInit {
  modalRef:BsModalRef;
  patientId;
  test;
  constructor(private tableauTransfusionnel:TableauTransfusionnelService, private modalService:BsModalService,
    private router: Router,private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
  }

  ngOnInit(): void {
    console.log('patientId: ', this.patientId);
    this.getOne()
  }
  getOne(){
    this.tableauTransfusionnel.getOne(this.patientId).subscribe(data=>{
      this.test=data
      console.log(data)
    })
  }
  delete(id){
    this.tableauTransfusionnel.delete(id).subscribe(res=>{
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
  modifyTest(){
    this.tableauTransfusionnel.update(this.test._id,this.test).subscribe(res=>{
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
