import { Component, OnInit ,TemplateRef} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{AnnuelService} from '../service/annuel.service';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bilan-annuel',
  templateUrl: './bilan-annuel.component.html',
  styleUrls: ['./bilan-annuel.component.css']
})
export class BilanAnnuelComponent implements OnInit {
  results;
  modalRef:BsModalRef;
  patientId;
    constructor(private annuel:AnnuelService, private modalService:BsModalService,
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
    this.annuel.getOne(this.patientId).subscribe(res=>{
      console.log(res);
      this.results=res
    })
  }
  delete(id){
    this.annuel.delete(id).subscribe(res=>{
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
    this.annuel.update(this.results._id,this.results).subscribe(res=>{
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
