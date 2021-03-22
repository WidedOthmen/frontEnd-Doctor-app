import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemestrielService {

  constructor(private http: HttpClient) { }
  add(data) {
    return this.http.post(environment.url + '/bilanSemestriel/add', data);
  }
  getOne(id){
    return this.http.get(environment.url + `/bilanSemestriel/getOne/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url + `/bilanSemestriel/delete/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url + `/bilanSemestriel/update/${id}`,data)
  }
}
