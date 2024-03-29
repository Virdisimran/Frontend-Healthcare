import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent{

firstName:string="";
lastName:string="";
dob: string=""

constructor(public patientService:PatientService,public router:Router){}

addPatient()
{
  var obj ={
    "id": 0,
    "firstName": this.firstName,
    "lastName": this.lastName,
    "dob": this.dob
  }

  return this.patientService.addPatients(obj).subscribe({
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
