import { Component, OnInit,TemplateRef } from '@angular/core';
import{ExamenService} from '../service/examen.service';
import{ActivatedRoute,Router} from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-examen-formulaire',
  templateUrl: './examen-formulaire.component.html',
  styleUrls: ['./examen-formulaire.component.css']
})
export class ExamenFormulaireComponent implements OnInit {
test={
  examenCoeur: '',
  examenPulmonaire: '',
  examenAbdominal: '',
  examenCutane: '',
  examenUrologique: '',
  examenAiresGanglionnaires: '',
  examenNeurologique: '',
  examenMembres: '',
  examenOrificesHerniares: '',
  examenGynecologique: '',
  examenAutre: '',
  problemePose:''
}
tests;
patientId;
modalRef:BsModalRef;
  constructor(private examenService:ExamenService , private router:Router ,
    private ActivatedRoute:ActivatedRoute , private modalService:BsModalService){
      this.ActivatedRoute.params.subscribe(params =>{
        this.patientId=params.patientId
      })
  }
  ngOnInit(): void {
    this.getOne()
  }
  add(){
    const addTest={
      examenCoeur:this.test.examenCoeur,
      examenPulmonaire:this.test.examenPulmonaire,
      examenAbdominal:this.test.examenAbdominal,
      examenCutane:this.test.examenCutane,
      examenUrologique:this.test.examenUrologique,
      examenAiresGanglionnaires:this.test.examenAiresGanglionnaires,
      examenNeurologique:this.test.examenNeurologique,
      examenMembres:this.test.examenMembres,
      examenOrificesHerniares:this.test.examenOrificesHerniares,
      examenGynecologique:this.test.examenGynecologique,
      examenAutre:this.test.examenAutre,
      problemePose:this.test.problemePose,
      patientId: this.patientId
    };
    console.log(addTest)
    this.examenService.add(addTest).subscribe(res => {
      console.log(res)
    })
    window.location.reload()
  }

  getOne(){
    this.examenService.getOne(this.patientId).subscribe(res =>{
      console.log(res);
      this.tests= res;
    })
  }

  delete(id){
    this.examenService.delete(id).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/patientData/'+this.patientId])
  }

  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }

  onReset(){
    this.modalRef.hide();
  }

  modifyTest(){
    this.examenService.update(this.tests._id,this.tests).subscribe( res => {
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
