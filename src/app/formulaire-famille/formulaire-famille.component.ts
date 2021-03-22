import { Component, OnInit } from '@angular/core';
import { FamilleFormulaireService } from '../service/famille-formulaire.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-famille',
  templateUrl: './formulaire-famille.component.html',
  styleUrls: ['./formulaire-famille.component.css'],
})
export class FormulaireFamilleComponent implements OnInit {
  family = {
    prenomPere: '',
    datedenaissancePere: '',
    hbaPere: '',
    hbfPere: '',
    hba2Pere: '',
    hlaPere: '',

    prenomMere: '',
    datedenaissanceMere: '',
    hbaMere: '',
    hbfMere: '',
    hba2Mere: '',
    hlaMere: '',

    prenomFratrie1: '',
    datedenaissanceFratrie1: '',
    hbaFratrie1: '',
    hbfFratrie1: '',
    hba2Fratrie1: '',
    hlaFratrie1: '',

    prenomFratrie2: '',
    datedenaissanceFratrie2: '',
    hbaFratrie2: '',
    hbfFratrie2: '',
    hba2Fratrie2: '',
    hlaFratrie2: '',

    prenomFratrie3: '',
    datedenaissanceFratrie3: '',
    hbaFratrie3: '',
    hbfFratrie3: '',
    hba2Fratrie3: '',
    hlaFratrie3: '',

    prenomFratrie4: '',
    datedenaissanceFratrie4: '',
    hbaFratrie4: '',
    hbfFratrie4: '',
    hba2Fratrie4: '',
    hlaFratrie4: '',

    prenomFratrie5: '',
    datedenaissanceFratrie5: '',
    hbaFratrie5: '',
    hbfFratrie5: '',
    hba2Fratrie5: '',
    hlaFratrie5: '',
  };
  patientId;
  constructor(
    private FamilleFormulaireService: FamilleFormulaireService,
    private router: Router , private ActivatedRoute:ActivatedRoute
  ) {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
  }

  ngOnInit(): void {}
  add() {
    const familyData = {
      prenomPere: this.family.prenomPere,
      datedenaissancePere: this.family.datedenaissancePere,
      hbaPere: this.family.hbaPere,
      hbfPere: this.family.hbfPere,
      hba2Pere: this.family.hba2Pere,
      hlaPere: this.family.hlaPere,

      prenomMere: this.family.prenomMere,
      datedenaissanceMere: this.family.datedenaissanceMere,
      hbaMere: this.family.hbaMere,
      hbfMere: this.family.hbfMere,
      hba2Mere: this.family.hba2Mere,
      hlaMere: this.family.hlaMere,

      prenomFratrie1: this.family.prenomFratrie1,
      datedenaissanceFratrie1: this.family.datedenaissanceFratrie1,
      hbaFratrie1: this.family.hbaFratrie1,
      hbfFratrie1: this.family.hbfFratrie1,
      hba2Fratrie1: this.family.hba2Fratrie1,
      hlaFratrie1: this.family.hlaFratrie1,

      prenomFratrie2: this.family.prenomFratrie2,
      datedenaissanceFratrie2: this.family.datedenaissanceFratrie2,
      hbaFratrie2: this.family.hbaFratrie2,
      hbfFratrie2: this.family.hbfFratrie2,
      hba2Fratrie2: this.family.hba2Fratrie2,
      hlaFratrie2: this.family.hlaFratrie2,

      prenomFratrie3: this.family.prenomFratrie3,
      datedenaissanceFratrie3: this.family.datedenaissanceFratrie3,
      hbaFratrie3: this.family.hbaFratrie3,
      hbfFratrie3: this.family.hbfFratrie3,
      hba2Fratrie3: this.family.hba2Fratrie3,
      hlaFratrie3: this.family.hlaFratrie3,

      prenomFratrie4: this.family.prenomFratrie4,
      datedenaissanceFratrie4: this.family.datedenaissanceFratrie4,
      hbaFratrie4: this.family.hbaFratrie4,
      hbfFratrie4: this.family.hbfFratrie4,
      hba2Fratrie4: this.family.hba2Fratrie4,
      hlaFratrie4: this.family.hlaFratrie4,

      prenomFratrie5: this.family.prenomFratrie5,
      datedenaissanceFratrie5: this.family.datedenaissanceFratrie5,
      hbaFratrie5: this.family.hbaFratrie5,
      hbfFratrie5: this.family.hbfFratrie5,
      hba2Fratrie5: this.family.hba2Fratrie5,
      hlaFratrie5: this.family.hlaFratrie5,
      patientId:this.patientId
    };
    console.log(familyData);
    this.FamilleFormulaireService.add(familyData).subscribe((res) => {
      console.log(res);
    });
    window.location.reload()
  }
}
