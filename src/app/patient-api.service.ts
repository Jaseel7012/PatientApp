import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  constructor(private http:HttpClient) { }
  fetchdata=()=>{
    return this.http.get("http://localhost:8080/viewpatient")
  }
  addData=(data:any)=>{
    return this.http.post("http://localhost:8080/addpatient",data)

  }
  searchdata=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
  deletedata=(data3:any)=>{
    return this.http.post("http://localhost:8080/delete",data3)
  }
}
