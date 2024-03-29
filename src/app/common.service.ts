import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }

  addAssessment(data:any):Observable<any>
  {
     return this.http.post<any>("https://localhost:7185/api/Assessment/AddAssessment",data)
  }

  listofAssessment():Observable<any>
  {
    return this.http.get<any>("https://localhost:7185/api/Assessment/GetListofAssessments")
  }

  getQuestionById(id:number):Observable<any>
  {
    return this.http.get<any>(`https://localhost:7185/api/Questions/GetQuestionById?id=${id}`)
  }

  addQuestions(data:any,id:number):Observable<any>
  {
    return this.http.post<any>(`https://localhost:7185/api/Questions/AddQuestionById?id=${id}`,data)
  }

  editQuestion(data:any):Observable<any>
  {
    return this.http.patch<any>("https://localhost:7185/api/Questions/UpdateQuestion",data)
  }

  updateResponse(data:any):Observable<any>
  {
    return this.http.patch<any>("https://localhost:7185/api/Questions/UpdateResponseType",data)
  }

  addResponse(data:any):Observable<any>
  {
    return this.http.post<any>("https://localhost:7185/api/Questions/AddResponse",data)
  }
}
