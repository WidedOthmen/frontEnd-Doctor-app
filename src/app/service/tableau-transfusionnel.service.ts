import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableauTransfusionnelService {

  constructor(private http:HttpClient) { }

  add(data){
    return this.http.post(environment.url + '/transfusionnel/addTransfusionnel',data)
  }
  getOne(id){
    return this.http.get(environment.url +`/transfusionnel/getOneTransfusionnel/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url+`/transfusionnel/deleteTransfusionnel/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url + `/transfusionnel/UpdateTransfusionnel/${id}`, data)
  }
}
