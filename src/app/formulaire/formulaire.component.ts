import { Component, OnInit,TemplateRef} from '@angular/core';
import { FormulaireService } from '../service/formulaire.service';
import { Router ,ActivatedRoute } from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  modalRef:BsModalRef;
  patient = {
    nom: '',
    prenom: '',
    datedenaissance: '',
    matricule: '',
    groupesanguin: '',
    phenotype: '',
    diagnostic: '',
    numtransfusion: '',
    dernieretransfusion: '',
    tauxdedeglobulisationactuelle: '',
    ancientauxdeglobulisation: '',
    derniereferritinemie: '',
    ferritinemieactuelle: '',
    traitement: '',
  };
  patients;
  receivedPatient;
  patientId;

  constructor(
    private ActivatedRoute:ActivatedRoute,
    private FormulaireService: FormulaireService,
    private router: Router, private modalService:BsModalService
  )   {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
  }
  ngOnInit(): void {
    this.getPatient();
  }

  getPatient() {
    this.FormulaireService.getOnePatient(this.patientId).subscribe(data => {
      console.log(data)
      this.patients=data;
      this.receivedPatient = this.patientId;
    })
  }

  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }
  onReset(){
    this.modalRef.hide();
  }
  modifyPatient(){
    this.FormulaireService.updatePatient(this.patients._id,this.patients).subscribe(res=>{
      console.log(res)
    },
    error => {
      console.log(error);
    });
     window.location.reload()
  }

  deletePatient(id){
    this.FormulaireService.deletePatient(id).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/patientData/'+this.patientId])
  }

  add() {
    const patientData = {
      nom: this.patient.nom,
      prenom: this.patient.prenom,
      datedenaissance: this.patient.datedenaissance,
      matricule: this.patient.matricule,
      groupesanguin: this.patient.groupesanguin,
      phenotype: this.patient.phenotype,
      diagnostic: this.patient.diagnostic,
      numtransfusion: this.patient.numtransfusion,
      dernieretransfusion: this.patient.dernieretransfusion,
      tauxdedeglobulisationactuelle: this.patient.tauxdedeglobulisationactuelle,
      ancientauxdeglobulisation: this.patient.ancientauxdeglobulisation,
      derniereferritinemie: this.patient.derniereferritinemie,
      ferritinemieactuelle: this.patient.ferritinemieactuelle,
      traitement: this.patient.traitement,
      patientId: this.patientId
    };
    console.log(patientData);
    this.FormulaireService.add(patientData).subscribe((res) => {
      console.log(res);
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
