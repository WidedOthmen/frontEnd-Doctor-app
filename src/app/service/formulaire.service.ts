import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(private http:HttpClient) { }
  add(data){
    return this.http.post(environment.url + "/patient/addPatient",data)
  }
  getOnePatient(id){
    return this.http.get(environment.url +`/patient/getOnePatient/${id}`)
  }
  deletePatient(id){
    return this.http.delete(environment.url+`/patient/deletepatient/${id}`)
  }
  updatePatient(id,data){
    return this.http.put(environment.url + `/patient/updatePatient/${id}`, data)
  }
}
