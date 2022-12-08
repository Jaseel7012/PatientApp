import { Component } from '@angular/core';
import { PatientApiService } from '../patient-api.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
constructor(private api:PatientApiService){
  this.api.fetchdata().subscribe(
    (response)=>{
      this.data=response
    }
  )
}

data:any=[]
}
