import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NfsService {

  constructor(private http:HttpClient) { }
  addNfsPost(data){
    return this.http.post(environment.url + "/nfsPostTransfusionnelle/addNfsPost",data)
  }
  getOneNfsPost(id){
    return this.http.get(environment.url +`/nfsPostTransfusionnelle/getOneNfsPost/${id}`)
  }
  deleteNfsPost(id){
    return this.http.delete(environment.url+`/nfsPostTransfusionnelle/deleteNfsPost/${id}`)
  }
  updateNfsPost(id,data){
    return this.http.put(environment.url + `/nfsPostTransfusionnelle/updateNfsPost/${id}`, data)
  }
  addNfsPre(data){
    return this.http.post(environment.url + "/nfsPreTransfusionnelle/addNfsPre",data)
  }
  getOneNfsPre(id){
    return this.http.get(environment.url +`/nfsPreTransfusionnelle/getOneNfsPre/${id}`)
  }
  deleteNfsPre(id){
    return this.http.delete(environment.url+`/nfsPreTransfusionnelle/deleteNfsPre/${id}`)
  }
  updateNfsPre(id,data){
    return this.http.put(environment.url + `/nfsPreTransfusionnelle/updateNfsPre/${id}`, data)
  }
}
