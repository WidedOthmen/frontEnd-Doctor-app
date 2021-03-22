import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObservService {

  constructor(private http:HttpClient) { }
  add(data){
    return this.http.post(environment.url + '/prophylaxie/addProphylaxie',data)
  }
  getOne(id){
    return this.http.get(environment.url +`/prophylaxie/getOneProphylaxie/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url+`/prophylaxie/deleteProphylaxie/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url + `/prophylaxie/updateProphylaxie/${id}`, data)
  }
}
