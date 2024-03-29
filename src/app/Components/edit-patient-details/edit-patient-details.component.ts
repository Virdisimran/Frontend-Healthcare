import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-edit-patient-details',
  templateUrl: './edit-patient-details.component.html',
  styleUrls: ['./edit-patient-details.component.css']
})
export class EditPatientDetailsComponent {

  data:any;
  firstName:string=""
  lastName:string=""
  dob:string=""
constructor(public patientservice:PatientService,public route:ActivatedRoute,public router:Router){}

ngOnInit()
{
  this.getPatient()
}

getPatient()
{
  var id = this.route.snapshot.paramMap.get('id');
  return this.patientservice.getPatientById(id).subscribe({
    next:(response)=>
    {
      console.log(response);
      this.data = response
    },
    error:(error)=>
    {
      console.error(error);
      
    }
  })
}
editPatient()
{
  var id = this.route.snapshot.paramMap.get('id');
  var obj ={
    "id": id,
    "firstName": this.data.firstName,
    "lastName": this.data.lastName,
    "dob": this.data.dob
  }
  return this.patientservice.updatePatientDetails(obj).subscribe({
    next:(response)=>
    {
      console.log(response);
      if(response.statuscode == 200)
      {
         this.router.navigate(['/'])
      }
    },
    error:(error)=>
    {
      console.error(error);
      
    }
  })
}
}
