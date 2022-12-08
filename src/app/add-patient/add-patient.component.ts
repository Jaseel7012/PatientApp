import { Component } from '@angular/core';
import { PatientApiService } from '../patient-api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
doc_name=""
patient_id=""
patient_name=""
contact_no=""
constructor(private api:PatientApiService){}
read=()=>{
  let data={
    "doc_name":this.doc_name,
    "patient_id":this.patient_id,
    "contact_no":this.contact_no,
    "patient_name":this.patient_name
  }
  this.api.addData(data).subscribe(
    (response)=>{
      console.log(response)
    }
  )
  console.log(data)
  
}
}
