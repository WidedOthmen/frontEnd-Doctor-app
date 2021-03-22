import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{TableauTransfusionnelService} from '../service/tableau-transfusionnel.service'

@Component({
  selector: 'app-formulaire-transfusionnel',
  templateUrl: './formulaire-transfusionnel.component.html',
  styleUrls: ['./formulaire-transfusionnel.component.css']
})
export class FormulaireTransfusionnelComponent implements OnInit {

  patientId;
  tableau={
    date:'',
    volumetransfuse:'',
    nfs:'',
    hb:'',
    pnn:'',
    plaquettes:'',
    reliculocytes:'',
    hbpost:'',
    rai:'',
    chh:'',
    ldh:'',
    creatine:'',
    glycemie:'',
    autresexamen:'',
    reaction:'',
    observations:'',
  }
  constructor( private router: Router,private tableauTransfusionnel:TableauTransfusionnelService , private ActivatedRoute:ActivatedRoute)
  {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
  }
  ngOnInit(): void {
  }
  add() {
    const dataTable = {
      date:this.tableau.date,
      volumetransfuse:this.tableau.volumetransfuse,
      hb:this.tableau.hb,
      pnn:this.tableau.pnn,
      plaquettes:this.tableau.plaquettes,
      reliculocytes:this.tableau.reliculocytes,
      hbpost:this.tableau.hbpost,
      rai:this.tableau.rai,
      chh:this.tableau.chh,
      ldh:this.tableau.ldh,
      creatine:this.tableau.creatine,
      glycemie:this.tableau.glycemie,
      autresexamen:this.tableau.autresexamen,
      reaction:this.tableau.reaction,
      observations:this.tableau.observations,
      patientId: this.patientId
    };
    console.log(dataTable);
    this.tableauTransfusionnel.add(dataTable).subscribe((res) => {
      console.log(res);
    });
    window.location.reload()
  }
}
