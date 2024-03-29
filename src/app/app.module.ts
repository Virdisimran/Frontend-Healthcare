import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAssessmentComponent } from './Components/edit-assessment/edit-assessment.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { EditPatientDetailsComponent } from './Components/edit-patient-details/edit-patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditAssessmentComponent,
    HomeComponent,
    AddPatientComponent,
    EditPatientDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
