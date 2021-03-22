import { Component, OnInit,TemplateRef} from '@angular/core';
import { NfsService} from '../service/nfs.service';
import { Router ,ActivatedRoute } from '@angular/router';
import{BsModalRef,BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nfs-formulaire',
  templateUrl: './nfs-formulaire.component.html',
  styleUrls: ['./nfs-formulaire.component.css']
})
export class NfsFormulaireComponent implements OnInit {
  modalRef:BsModalRef;
  nfsPre={
    hb:"",
    gb:"",
    pnn:"",
    lymphocytes:"",
    plq:"",
    retic:"",
    rai:"",
    tcd:"",
    avecOuSansIncedents:"",
    recu:"",
  }
  patientId;
  full;

  nfsPost={
    hb:"",
    gb:"",
    pnn:"",
    lymphocytes:"",
    plq:"",
    retic:"",
    rai:"",
    tcd:""
  }
  empty;
  constructor(
    private ActivatedRoute:ActivatedRoute, private nfs:NfsService,
    private router: Router, private modalService:BsModalService
  )   {
    this.ActivatedRoute.params.subscribe(params =>{
      this.patientId=params.patientId
    })
  }

  ngOnInit(): void {
    this.getOne()
    this.getOnePost()
  }
  add(){
    const addNfsPre={
      hb:this.nfsPre.hb,
      gb:this.nfsPre.gb,
      pnn:this.nfsPre.pnn,
      lymphocytes:this.nfsPre.lymphocytes,
      plq:this.nfsPre.plq,
      retic:this.nfsPre.retic,
      rai:this.nfsPre.rai,
      tcd:this.nfsPre.tcd,
      avecOuSansIncedents:this.nfsPre.avecOuSansIncedents,
      recu:this.nfsPre.recu,
      patientId:this.patientId
    }
    console.log(addNfsPre);
    this.nfs.addNfsPre(addNfsPre).subscribe(res=>{
      console.log(res);
    })
    window.location.reload()
  }

  getOne() {
    this.nfs.getOneNfsPre(this.patientId).subscribe(data => {
      console.log(data)
      this.full=data;
    })
  }
  openModal(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }
  onReset(){
    this.modalRef.hide();
  }
  modifyNfsPre(){
    this.nfs.updateNfsPre(this.full._id,this.full).subscribe(res=>{
      console.log(res)
    },
    error => {
      console.log(error);
    });
     window.location.reload()
  }

  deleteNfsPre(id){
    this.nfs.deleteNfsPre(id).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/patientData/'+this.patientId])
  }

  addPost(){
    const addNfsPost={
      hb:this.nfsPost.hb,
      gb:this.nfsPost.gb,
      pnn:this.nfsPost.pnn,
      lymphocytes:this.nfsPost.lymphocytes,
      plq:this.nfsPost.plq,
      retic:this.nfsPost.retic,
      rai:this.nfsPost.rai,
      tcd:this.nfsPost.tcd,
      patientId:this.patientId
    }
    console.log(addNfsPost);
    this.nfs.addNfsPost(addNfsPost).subscribe(res=>{
      console.log(res);
    })
    window.location.reload()
  }
  getOnePost() {
    this.nfs.getOneNfsPost(this.patientId).subscribe(data => {
      console.log(data)
      this.empty=data;
    })
  }
  openModalPost(template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }
  modifyNfsPost(){
    this.nfs.updateNfsPost(this.empty._id,this.empty).subscribe(res=>{
      console.log(res)
    },
    error => {
      console.log(error);
    });
     window.location.reload()
  }

  deleteNfsPost(id){
    this.nfs.deleteNfsPost(id).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/patientData/'+this.patientId])
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
