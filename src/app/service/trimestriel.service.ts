import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrimestrielService {

  constructor(private http: HttpClient) { }
  add(data) {
    return this.http.post(environment.url + '/bilanTrimestriel/add', data);
  }
  getOne(id){
    return this.http.get(environment.url+`/bilanTrimestriel/getOne/${id}`)
  }
  delete(id){
    return this.http.delete(environment.url + `/bilanTrimestriel/delete/${id}`)
  }
  update(id,data){
    return this.http.put(environment.url + `/bilanTrimestriel/update/${id}`,data)
  }
}
