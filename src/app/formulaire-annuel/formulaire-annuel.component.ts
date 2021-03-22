import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import{AnnuelService} from '../service/annuel.service';

@Component({
  selector: 'app-formulaire-annuel',
  templateUrl: './formulaire-annuel.component.html',
  styleUrls: ['./formulaire-annuel.component.css']
})
export class FormulaireAnnuelComponent implements OnInit {
bilanAnnuel={
  croissanceStaturaleResul:'',
  croissanceStaturaleObserv:'',
  stadePubertaireResult:'',
  stadePubertaireObserv :'',
  volumeFoieResult:'',
  volumeFoieObserv:'',
  volumeRateResult:'',
  volumeRateObserv:'',
  nbTransfussionRecuesResult:'',
  nbTransfussionRecuesObserv:'',
  consommationSangAnnuellResult:'',
  consommationSangAnnuellObserv:'',
  hbMoyPreTransfResult:'',
  hbMoyPreTransfObserv:'',
  hbMoyPostTransfResult:'',
  hbMoyPostTransfObserv:'',
  apportFerResult:'',
  apportFerObserv:'',
  apportAnnuelFerResult:'',
  apportAnnuelFerObserv:'',
  observTraitementChelateurFerResult:'',
  observTraitementChelateurFerObserv:'',
  tshResult:'',
  tshObserv:'',
  ft4Result:'',
  ft4Observ:'',
  audiogrammeResult:'',
  audiogrammeObserv:'',
  examOphtaResult:'',
  examOphtaObserv:'',
  ageOsseuxResult:'',
  ageOsseuxObserv:'',
  ecgResult:'',
  ecgObserv:'',
  rxThoraxResult:'',
  rxThoraxObserv:'',
  echoDoppierCardiaqueResult:'',
  echoDoppierCardiaqueObserv:'',
  echoAbdominaleResult:'',
  echoAbdominaleObserv:'',
  irmCardiaqueResult:'',
  irmCardiaqueObserv:'',
  irmHepatiqueResult:'',
  irmHepatiqueObserv:'',
  autreExamResult:'',
  autreExamObserv:'',
}
patientId;
constructor(private router: Router,private annuel:AnnuelService, private ActivatedRoute:ActivatedRoute)
{
  this.ActivatedRoute.params.subscribe(params =>{
    this.patientId=params.patientId
  })
 }

  ngOnInit(): void {
  }
  add(){
    const addBilanAnnuel={
      patientId:this.patientId,
      croissanceStaturaleResul:this.bilanAnnuel.croissanceStaturaleResul,
      croissanceStaturaleObserv:this.bilanAnnuel.croissanceStaturaleObserv,
      stadePubertaireResult:this.bilanAnnuel.stadePubertaireResult,
      stadePubertaireObserv :this.bilanAnnuel.stadePubertaireObserv,
      volumeFoieResult:this.bilanAnnuel.volumeFoieResult,
      volumeFoieObserv:this.bilanAnnuel.volumeFoieObserv,
      volumeRateResult:this.bilanAnnuel.volumeRateResult,
      volumeRateObserv:this.bilanAnnuel.volumeRateObserv,
      nbTransfussionRecuesResult:this.bilanAnnuel.nbTransfussionRecuesResult,
      nbTransfussionRecuesObserv:this.bilanAnnuel.nbTransfussionRecuesObserv,
      consommationSangAnnuellResult:this.bilanAnnuel.consommationSangAnnuellResult,
      consommationSangAnnuellObserv:this.bilanAnnuel.consommationSangAnnuellObserv,
      hbMoyPreTransfResult:this.bilanAnnuel.hbMoyPreTransfResult,
      hbMoyPreTransfObserv:this.bilanAnnuel.hbMoyPreTransfObserv,
      hbMoyPostTransfResult:this.bilanAnnuel.hbMoyPostTransfResult,
      hbMoyPostTransfObserv:this.bilanAnnuel.hbMoyPostTransfObserv,
      apportFerResult:this.bilanAnnuel.apportFerResult,
      apportFerObserv:this.bilanAnnuel.apportFerObserv,
      apportAnnuelFerResult:this.bilanAnnuel.apportAnnuelFerResult,
      apportAnnuelFerObserv:this.bilanAnnuel.apportAnnuelFerObserv,
      observTraitementChelateurFerResult:this.bilanAnnuel.observTraitementChelateurFerResult,
      observTraitementChelateurFerObserv:this.bilanAnnuel.observTraitementChelateurFerObserv,
      tshResult:this.bilanAnnuel.tshResult,
      tshObserv:this.bilanAnnuel.tshObserv,
      ft4Result:this.bilanAnnuel.ft4Result,
      ft4Observ:this.bilanAnnuel.ft4Observ,
      audiogrammeResult:this.bilanAnnuel.audiogrammeResult,
      audiogrammeObserv:this.bilanAnnuel.audiogrammeObserv,
      examOphtaResult:this.bilanAnnuel.examOphtaResult,
      examOphtaObserv:this.bilanAnnuel.examOphtaObserv,
      ageOsseuxResult:this.bilanAnnuel.ageOsseuxResult,
      ageOsseuxObserv:this.bilanAnnuel.ageOsseuxObserv,
      ecgResult:this.bilanAnnuel.ecgResult,
      ecgObserv:this.bilanAnnuel.ecgObserv,
      rxThoraxResult:this.bilanAnnuel.rxThoraxResult,
      rxThoraxObserv:this.bilanAnnuel.rxThoraxObserv,
      echoDoppierCardiaqueResult:this.bilanAnnuel.echoDoppierCardiaqueResult,
      echoDoppierCardiaqueObserv:this.bilanAnnuel.echoDoppierCardiaqueObserv,
      echoAbdominaleResult:this.bilanAnnuel.echoAbdominaleResult,
      echoAbdominaleObserv:this.bilanAnnuel.echoAbdominaleObserv,
      irmCardiaqueResult:this.bilanAnnuel.irmCardiaqueResult,
      irmCardiaqueObserv:this.bilanAnnuel.irmCardiaqueObserv,
      irmHepatiqueResult:this.bilanAnnuel.irmHepatiqueResult,
      irmHepatiqueObserv:this.bilanAnnuel.irmHepatiqueObserv,
      autreExamResult:this.bilanAnnuel.autreExamResult,
      autreExamObserv:this.bilanAnnuel.autreExamObserv
    }
    console.log(addBilanAnnuel)
    this.annuel.add(addBilanAnnuel).subscribe(res=>{
      console.log(res)
    })
    window.location.reload()
  }
}
