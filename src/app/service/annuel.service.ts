import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnnuelService {

  constructor(private http: HttpClient) { }
  add(data) {
    return this.http.post(environment.url + '/bilanAnnuel/add', data);
  }
  getOne(id){
    return this.http.get(environment.url+`/bilanAnnuel/getOne/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url + `/bilanAnnuel/delete/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url + `/bilanAnnuel/update/${id}`,data)
  }
}
