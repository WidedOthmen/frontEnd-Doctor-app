import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor( private http:HttpClient) { }
  add(data){
    return this.http.post(environment.url + '/examen/add' , data)
  }
  getOne(id){
    return this.http.get(environment.url + `/examen/getOne/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url + `/examen/delete/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url +`/examen/update/${id}`,data)
  }
}
