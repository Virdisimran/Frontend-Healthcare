import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public http:HttpClient) { }

  addPatients(data:any):Observable<any>
  {
    return this.http.post<any>("https://localhost:7185/api/Patient/AddPatient",data)
  }

  listOfPatients():Observable<any>
  {
    return this.http.get<any>("https://localhost:7185/api/Patient/ListOfPatients");
  }

  updatePatientDetails(data:any):Observable<any>
  {
    return this.http.put<any>("https://localhost:7185/api/Patient/UpdatePatientDetails",data)
  }
  getPatientById(id:any):Observable<any>
  {
    return this.http.get<any>(`https://localhost:7185/api/Patient/GetPatientById?id=${id}`)
  }
}
