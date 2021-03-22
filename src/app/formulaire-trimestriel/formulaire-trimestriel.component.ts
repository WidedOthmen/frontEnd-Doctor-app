import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{TrimestrielService} from '../service/trimestriel.service';
@Component({
  selector: 'app-formulaire-trimestriel',
  templateUrl: './formulaire-trimestriel.component.html',
  styleUrls: ['./formulaire-trimestriel.component.css']
})
export class FormulaireTrimestrielComponent implements OnInit {
  bilan={
    poidsT1:'',
    poidsT2:'',
    poidsT3:'',
    poidsT4:'',
    poidsObserv:'',

    tailleT1:'',
    tailleT2:'',
    tailleT3:'',
    tailleT4:'',
    tailleObserv:'',

    ferritineT1:'',
    ferritineT2:'',
    ferritineT3:'',
    ferritineT4:'',
    ferritineObserv:'',

    asatT1:'',
    asatT2:'',
    asatT3:'',
    asatT4:'',
    asatObserv:'',

    alatT1:'',
    alatT2:'',
    alatT3:'',
    alatT4:'',
    alatObserv:'',

    bbtT1:'',
    bbtT2:'',
    bbtT3:'',
    bbtT4:'',
    bbtObserv:'',

    bbiT1:'',
    bbiT2:'',
    bbiT3:'',
    bbiT4:'',
    bbiObserv:'',
  }
  patientId;
  constructor(private router: Router,private timestriel:TrimestrielService, private ActivatedRoute:ActivatedRoute)
  {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
   }

  ngOnInit(): void {
  }
  add(){
    const addBilan={
      poidsT1:this.bilan.poidsT1,
      poidsT2:this.bilan.poidsT2,
      poidsT3:this.bilan.poidsT3,
      poidsT4:this.bilan.poidsT4,
      poidsObserv:this.bilan.poidsObserv,
      tailleT1:this.bilan.tailleT1,
      tailleT2:this.bilan.tailleT2,
      tailleT3:this.bilan.tailleT3,
      tailleT4:this.bilan.tailleT4,
      tailleObserv:this.bilan.tailleObserv,
      ferritineT1:this.bilan.ferritineT1,
      ferritineT2:this.bilan.ferritineT2,
      ferritineT3:this.bilan.ferritineT3,
      ferritineT4:this.bilan.ferritineT4,
      ferritineObserv:this.bilan.ferritineObserv,
      asatT1:this.bilan.asatT1,
      asatT2:this.bilan.asatT2,
      asatT3:this.bilan.asatT3,
      asatT4:this.bilan.asatT4,
      asatObserv:this.bilan.asatObserv,
      alatT1:this.bilan.alatT1,
      alatT2:this.bilan.alatT2,
      alatT3:this.bilan.alatT3,
      alatT4:this.bilan.alatT4,
      alatObserv:this.bilan.alatObserv,
      bbtT1:this.bilan.bbtT1,
      bbtT2:this.bilan.bbtT2,
      bbtT3:this.bilan.bbtT3,
      bbtT4:this.bilan.bbtT4,
      bbtObserv:this.bilan.bbtObserv,
      bbiT1:this.bilan.bbiT1,
      bbiT2:this.bilan.bbiT2,
      bbiT3:this.bilan.bbiT3,
      bbiT4:this.bilan.bbiT4,
      bbiObserv:this.bilan.bbiObserv,
      patientId:this.patientId
    }
    console.log(addBilan)
    this.timestriel.add(addBilan).subscribe(res=>{
      console.log(res)
    })
    window.location.reload()
  }
}
