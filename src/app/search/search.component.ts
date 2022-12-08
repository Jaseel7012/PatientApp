import { Component } from '@angular/core';
import { PatientApiService } from '../patient-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  patient_id=""
  constructor(private api:PatientApiService){}
  search:any=[]
  read=()=>{
    let data:any={
      "patient_id":this.patient_id
    }
    this.api.searchdata(data).subscribe(
      (resp)=>{
        this.search=resp;
      }
    )
  }

  clickDel=(id:any)=>{
    let data:any={
      "id":id
    }
    this.api.deletedata(data).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )

  }
}
