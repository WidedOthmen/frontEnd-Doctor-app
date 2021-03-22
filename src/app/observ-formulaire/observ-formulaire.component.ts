import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{ObservService} from '../service/observ.service';

@Component({
  selector: 'app-observ-formulaire',
  templateUrl: './observ-formulaire.component.html',
  styleUrls: ['./observ-formulaire.component.css']
})
export class ObservFormulaireComponent implements OnInit {
  patientId;
  prophylaxie={
    datesvaccinS1:'',
    datesvaccinS2:'',
    datesvaccinS3:'',
    datesvaccinS4:'',
    datesvaccinS5:'',
    datesvaccinS6:'',
    pneumocoquevaccS1:'',
    pneumocoquevaccS2:'',
    pneumocoquevaccS3:'',
    pneumocoquevaccS4:'',
    pneumocoquevaccS5:'',
    pneumocoquevaccS6:'',
    meningocoquevaccS1:'',
    meningocoquevaccS2:'',
    meningocoquevaccS3:'',
    meningocoquevaccS4:'',
    meningocoquevaccS5:'',
    meningocoquevaccS6:'',
    hoemophilusvaccS1:'',
    hoemophilusvaccS2:'',
    hoemophilusvaccS3:'',
    hoemophilusvaccS4:'',
    hoemophilusvaccS5:'',
    hoemophilusvaccS6:'',
    hepatiteS1:'',
    hepatiteS2:'',
    hepatiteS3:'',
    hepatiteS4:'',
    hepatiteS5:'',
    hepatiteS6:'',
    autresvaccS1:'',
    autresvaccS2:'',
    autresvaccS3:'',
    autresvaccS4:'',
    autresvaccS5:'',
    autresvaccS6:'',
    antibioprophytaxie:'',
    date1antibioptophy:'',
    date2antibioptophy:'',
    date3antibioptophy:'',
    date4antibioptophy:'',
    date5antibioptophy:'',
    date6antibioptophy:'',
    splnectomieDate:'',
    splnectomieChirugie:'',
    observations:''
  }
  constructor(private router: Router,private prophylaxieService:ObservService, private ActivatedRoute:ActivatedRoute)
  {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
   }
  ngOnInit(): void {
  }
  add(){
    const addProphylaxie={
      datesvaccinS1:this.prophylaxie.datesvaccinS1,
      datesvaccinS2:this.prophylaxie.datesvaccinS2,
      datesvaccinS3:this.prophylaxie.datesvaccinS3,
      datesvaccinS4:this.prophylaxie.datesvaccinS4,
      datesvaccinS5:this.prophylaxie.datesvaccinS5,
      datesvaccinS6:this.prophylaxie.datesvaccinS6,
      pneumocoquevaccS1:this.prophylaxie.pneumocoquevaccS1,
      pneumocoquevaccS2:this.prophylaxie.pneumocoquevaccS2,
      pneumocoquevaccS3:this.prophylaxie.pneumocoquevaccS3,
      pneumocoquevaccS4:this.prophylaxie.pneumocoquevaccS4,
      pneumocoquevaccS5:this.prophylaxie.pneumocoquevaccS5,
      pneumocoquevaccS6:this.prophylaxie.pneumocoquevaccS6,
      meningocoquevaccS1:this.prophylaxie.meningocoquevaccS1,
      meningocoquevaccS2:this.prophylaxie.meningocoquevaccS2,
      meningocoquevaccS3:this.prophylaxie.meningocoquevaccS3,
      meningocoquevaccS4:this.prophylaxie.meningocoquevaccS4,
      meningocoquevaccS5:this.prophylaxie.meningocoquevaccS5,
      meningocoquevaccS6:this.prophylaxie.meningocoquevaccS6,
      hoemophilusvaccS1:this.prophylaxie.hoemophilusvaccS1,
      hoemophilusvaccS2:this.prophylaxie.hoemophilusvaccS2,
      hoemophilusvaccS3:this.prophylaxie.hoemophilusvaccS3,
      hoemophilusvaccS4:this.prophylaxie.hoemophilusvaccS4,
      hoemophilusvaccS5:this.prophylaxie.hoemophilusvaccS5,
      hoemophilusvaccS6:this.prophylaxie.hoemophilusvaccS6,
      hepatiteS1:this.prophylaxie.hepatiteS1,
      hepatiteS2:this.prophylaxie.hepatiteS2,
      hepatiteS3:this.prophylaxie.hepatiteS3,
      hepatiteS4:this.prophylaxie.hepatiteS4,
      hepatiteS5:this.prophylaxie.hepatiteS5,
      hepatiteS6:this.prophylaxie.hepatiteS6,
      autresvaccS1:this.prophylaxie.autresvaccS1,
      autresvaccS2:this.prophylaxie.autresvaccS2,
      autresvaccS3:this.prophylaxie.autresvaccS3,
      autresvaccS4:this.prophylaxie.autresvaccS4,
      autresvaccS5:this.prophylaxie.autresvaccS5,
      autresvaccS6:this.prophylaxie.autresvaccS6,
      antibioprophytaxie:this.prophylaxie.antibioprophytaxie,
      date1antibioptophy:this.prophylaxie.date1antibioptophy,
      date2antibioptophy:this.prophylaxie.date2antibioptophy,
      date3antibioptophy:this.prophylaxie.date3antibioptophy,
      date4antibioptophy:this.prophylaxie.date4antibioptophy,
      date5antibioptophy:this.prophylaxie.date5antibioptophy,
      date6antibioptophy:this.prophylaxie.date6antibioptophy,
      splnectomieDate:this.prophylaxie.splnectomieDate,
      splnectomieChirugie:this.prophylaxie.splnectomieChirugie,
      observations:this.prophylaxie.observations,
      patientId:this.patientId
    }
    console.log(addProphylaxie);
    this.prophylaxieService.add(addProphylaxie).subscribe(res=>{
     console.log(res);
    })
    window.location.reload()
  }
}
