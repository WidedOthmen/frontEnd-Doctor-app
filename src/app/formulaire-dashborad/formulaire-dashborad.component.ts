import { Component, OnInit } from '@angular/core';
import{DashboradService} from '../service/dashborad.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-formulaire-dashborad',
  templateUrl: './formulaire-dashborad.component.html',
  styleUrls: ['./formulaire-dashborad.component.css']
})
export class FormulaireDashboradComponent implements OnInit {
  newPatient={
    nom: '',
    prenom:'',
    janvier:'',
    fevrier:'',
    mars:'',
    avril:'',
    mai:'',
    juin:'',
    juillet:'',
    aout:'',
    septembre:'',
    octobre:'',
    novembre:'',
    decembre:'',
  }

  constructor(private router:Router , private DashboradService:DashboradService) { }

  ngOnInit(): void {
  }
  add(){
    const newPatientData={
      nom:this.newPatient.nom,
      prenom:this.newPatient.prenom,
      janvier:this.newPatient.janvier,
      fevrier:this.newPatient.fevrier,
      mars:this.newPatient.mars,
      avril:this.newPatient.avril,
      mai:this.newPatient.mai,
      juin:this.newPatient.juin,
      juillet:this.newPatient.juillet,
      aout:this.newPatient.aout,
      septembre:this.newPatient.septembre,
      octobre:this.newPatient.octobre,
      novembre:this.newPatient.novembre,
      decembre:this.newPatient.decembre
    }
    console.log(newPatientData)
    this.DashboradService.addData(newPatientData).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/home'])
  }
  logoutUser(){
    localStorage.removeItem('token');
    console.log('distroy')
    this.router.navigate(["/login"])
  }
}
