import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{SemestrielService} from '../service/semestriel.service';
@Component({
  selector: 'app-formulaire-semestriel',
  templateUrl: './formulaire-semestriel.component.html',
  styleUrls: ['./formulaire-semestriel.component.css']
})
export class FormulaireSemestrielComponent implements OnInit {
  patientId;
  bilanSemestriel={
    glyHos1:"",
    glyHos2:"",
    glyHoObserv:"",

    glyH2s1:"",
    glyH2s2:"",
    glyH2Observ:"",

    calcemieS1: "",
    calcemieS2:"",
    calcemieObserv: "",

    phosphS1:"",
    phosphS2:"",
    phosphObserv:"",

    phAlS1:"",
    phAlS2:"",
    phAlObserv:"",

    magS1:"",
    magS2:"",
    magObserv:"",

    tcdS1:"",
    tcdS2:"",
    tcdObserv:"",

    agHbsS1: "",
    agHbsS2:"",
    agHbsObserv:"",

    hcvS1:"",
    hcvS2:"",
    hcvObserv:"",

    hivS1:"",
    hivS2:"",
    hivObserv:"",
  }
  constructor(private router: Router,private semestriel:SemestrielService, private ActivatedRoute:ActivatedRoute)
  {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
   }

  ngOnInit(): void {
  }
  add(){
    const addBilanSemestriel={
      glyHos1:this.bilanSemestriel.glyHos1,
      glyHos2:this.bilanSemestriel.glyHos2,
      glyHoObserv:this.bilanSemestriel.glyHoObserv,
      glyH2s1:this.bilanSemestriel.glyH2s1,
      glyH2s2:this.bilanSemestriel.glyH2s2,
      glyH2Observ:this.bilanSemestriel.glyH2Observ,

      calcemieS1: this.bilanSemestriel.calcemieS1,
      calcemieS2:this.bilanSemestriel.calcemieS2,
      calcemieObserv: this.bilanSemestriel.calcemieObserv,

      phosphS1:this.bilanSemestriel.phosphS1,
      phosphS2:this.bilanSemestriel.phosphS2,
      phosphObserv:this.bilanSemestriel.phosphObserv,

      phAlS1:this.bilanSemestriel.phAlS1,
      phAlS2:this.bilanSemestriel.phAlS2,
      phAlObserv:this.bilanSemestriel.phAlObserv,

      magS1:this.bilanSemestriel.magS1,
      magS2:this.bilanSemestriel.magS2,
      magObserv:this.bilanSemestriel.magObserv,

      tcdS1:this.bilanSemestriel.tcdS1,
      tcdS2:this.bilanSemestriel.tcdS2,
      tcdObserv:this.bilanSemestriel.tcdObserv,

      agHbsS1: this.bilanSemestriel.agHbsS1,
      agHbsS2:this.bilanSemestriel.agHbsS2,
      agHbsObserv:this.bilanSemestriel.agHbsObserv,

      hcvS1:this.bilanSemestriel.hcvS1,
      hcvS2:this.bilanSemestriel.hcvS2,
      hcvObserv:this.bilanSemestriel.hcvObserv,

      hivS1:this.bilanSemestriel.hivS1,
      hivS2:this.bilanSemestriel.hivS2,
      hivObserv:this.bilanSemestriel.hivObserv,
      patientId:this.patientId
    }
    console.log(addBilanSemestriel)
    this.semestriel.add(addBilanSemestriel).subscribe(res=>{
      console.log(res)
    })
    window.location.reload()
  }
}
