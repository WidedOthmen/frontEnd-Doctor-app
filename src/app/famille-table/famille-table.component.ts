import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FamilleFormulaireService } from '../service/famille-formulaire.service';
import { ActivatedRoute,Router } from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-famille-table',
  templateUrl: './famille-table.component.html',
  styleUrls: ['./famille-table.component.css'],
})
export class FamilleTableComponent implements OnInit {
  modalRef:BsModalRef;
  family;
  patientId;
  constructor(
    private FamilleFormulaireService: FamilleFormulaireService, private modalService:BsModalService,
    private router: Router,private ActivatedRoute:ActivatedRoute) {
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
  }

  ngOnInit(): void {
    console.log('patientId: ', this.patientId);
    this.getOneFamily()
  }
  getOneFamily(){
    this.FamilleFormulaireService.getOne(this.patientId).subscribe(data=>{
      this.family = data;
      console.log(this.patientId)
    })

  }
  deleteFamily(id){
    this.FamilleFormulaireService.deleteFamily(id).subscribe(res=>{
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
  modifyFamily(){
    this.FamilleFormulaireService.updateFamily(this.family._id,this.family).subscribe(res=>{
      console.log(res)
    },
    error => {
      console.log(error);
    });
     window.location.reload()
  }
  navigateToFormluar(){
    this.router.navigate(["/formulaireFamilleTable/" + this.patientId])
  }
  logoutUser(){
    localStorage.removeItem('token');
    console.log('distroy')
    this.router.navigate(["/login"])
  }
  navigateToPatient(){
    this.router.navigate(['/patientData/'+this.patientId])
  }
}
