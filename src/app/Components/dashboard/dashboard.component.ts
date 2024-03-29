import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import{FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
myForm: any;
data: any[] = [];
patient:any

constructor(public service:CommonService,public fb:FormBuilder,private router:Router,public route:ActivatedRoute,public patientService:PatientService){}

ngOnInit(): void {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
  });
  this.getListOfAssessment();
  this.getPatient()
}
addAssessment()
{
  return this.service.addAssessment(this.myForm.value).subscribe({
   next:(res)=>
    {
      console.log(res);
    }
  })
}

getListOfAssessment()
{
  return this.service.listofAssessment().subscribe({
    next:(response)=>
    {
      console.log(response);
      this.data=response
    }
  })
}


getPatient()
{
  var id = this.route.snapshot.paramMap.get('id');
  return this.patientService.getPatientById(id).subscribe({
    next:(response)=>
    {
      console.log(response);
      this.patient = response
    },
    error:(error)=>
    {
      console.error(error);
      
    }
  })
}
addQuestions()
{

}

done()
{

}

selectedValue()
{
  const selectedAssessment = this.myForm.get('responseType').value;
  console.log('Selected assessment:', selectedAssessment);
  this.router.navigate(['/edit',selectedAssessment])
}
}
