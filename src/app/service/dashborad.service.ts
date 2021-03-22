import { Injectable } from '@angular/core';
import{environment} from 'src/environments/environment';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboradService {

  constructor(private http:HttpClient) { }

  // this retrieve data for patient
  addData(data){
    return this.http.post(environment.url + '/donnee/addData',data)
  }
  getAllData(){
    return this.http.get(environment.url + '/donnee/getAllData')
  }
  getOneData(id){
    return this.http.get(environment.url +`/donnee/getOneData/${id}`)
  }
  deleteData(id){
    return this.http.delete(environment.url +`/donnee/deleteData/${id}`)
  }
  updateData(id,data){
    return this.http.put(environment.url +`/donnee/updateData/${id}`,data)
  }
  search(name){
    return this.http.get(environment.url + `/donnee/searchname/${name}`)
  }
}
