import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  list:any[]=[];
  firstName:string="";
  lastName:string="";
  dob:string="";
 myForm!:FormGroup;

  constructor(public patientservice:PatientService,public router:Router,)
  {}
  @ViewChild('exampleModal') modal: any;

  ngOnInit()
  {
    this.patientList();
  }

  openModal() {
    this.modal.show();
  }

  patientList()
  {
    return this.patientservice.listOfPatients().subscribe({
      next:(response)=>
      {
         this.list = response
        console.log(response);
        
      },
      error:(error)=>
      {
        console.error(error);
      }
    })
  }

  addPatient()
  {
    this.router.navigate(['/addPatient'])
  }

  viewDetails(id:number)
  {
   
  }

  editDetails(id:number)
  {
    
    this.router.navigate(['/editPatientDetails',id])
    console.log("patientId",id);
    
   
  }

  addAssessment(id:number)
  {
    this.router.navigate(['/dashboard',id])
  }
}
