import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditAssessmentComponent } from './Components/edit-assessment/edit-assessment.component';
import { EditPatientDetailsComponent } from './Components/edit-patient-details/edit-patient-details.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'edit',component:EditAssessmentComponent},
  {path:'addPatient',component:AddPatientComponent},
  {path:'editPatientDetails/:id',component:EditPatientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
