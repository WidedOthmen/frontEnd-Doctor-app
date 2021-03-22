import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FamilleFormulaireService {
  constructor(private http: HttpClient) {}
  add(data) {
    return this.http.post(environment.url + '/family/addFamily', data);
  }
  getAllFamily() {
    return this.http.get(environment.url + '/family/getAllFamily');
  }
  getOne(id){
    return this.http.get(environment.url+`/family/getOneFamily/${id}`)
  }
  deleteFamily(id){
    return this.http.delete(environment.url + `/family/deleteFamily/${id}`)
  }
  updateFamily(id,data){
    return this.http.put(environment.url + `/family/updateFamily/${id}`,data)
  }
}
