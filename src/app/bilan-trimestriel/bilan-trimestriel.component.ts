import { Component, OnInit ,TemplateRef} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{TrimestrielService} from '../service/trimestriel.service';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bilan-trimestriel',
  templateUrl: './bilan-trimestriel.component.html',
  styleUrls: ['./bilan-trimestriel.component.css']
})
export class BilanTrimestrielComponent implements OnInit {
  modalRef:BsModalRef;
  patientId;
  results;
  constructor(private trimestriel:TrimestrielService, private modalService:BsModalService,
    private router: Router,private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
  }
  ngOnInit(): void {
    this.getOne()
  }
  getOne(){
    this.trimestriel.getOne(this.patientId).subscribe(res=>{
      console.log(res);
      this.results=res
    })
  }
  delete(id){
    this.trimestriel.delete(id).subscribe(res=>{
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
    this.trimestriel.update(this.results._id,this.results).subscribe(res=>{
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

