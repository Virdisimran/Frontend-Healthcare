import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-assessment',
  templateUrl: './edit-assessment.component.html',
  styleUrls: ['./edit-assessment.component.css']
})
export class EditAssessmentComponent {


  options: string[] = ['Text', 'TextArea']
  data: any;
  myForm!: FormGroup;
  editForm!: FormGroup
  responseForm!: FormGroup
  responseTypeForm!: FormGroup
  showModal: boolean = true;
  id = sessionStorage.getItem('Id');
  questionId = sessionStorage.getItem('QuestionId')
  selectedResponseType : { [id: number]: string } = {};
  http: any;
  responses: any[] = []; 


  constructor(public service: CommonService, public fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      question: ['', Validators.required],
      responseType: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      question: ['', Validators.required],
      id: Number(this.questionId)
    });
    this.responseTypeForm = this.fb.group({
      responseType: ['', Validators.required],
      id: Number(this.questionId)
    });
    this.responseForm = this.fb.group({
      questionId: this.questionId,
      response: [''],
     
    })
 console.log(this.myForm.value)

    this.myForm.get('responseType')?.valueChanges.subscribe(responseType => {
      this.selectedResponseType = responseType;
    });
    this.get();
  }

  get() {
    console.log(this.id);
    return this.service.getQuestionById(Number(this.id)).subscribe({
      next: (response) => {
        this.data = response;
        this.responseForm.patchValue({
          responseType: this.data.responseType
        })
        console.log(response);
        // this.selectedResponseType = responseType
      }
    });
  }

  addQuestions() {
    return this.service.addQuestions(this.myForm.value, Number(this.id)).subscribe({
      next: (response) => {
        console.log(response);
        this.get();
        this.showModal = false;
      }
    });
  }

  onResponseTypeChange(event: any) {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);

    var request = {
      assessmentId: sessionStorage.getItem('QuestionId'),
      ResponseType: selectedValue,
      isActive: 1,
    };
    return this.service.updateResponse(request).subscribe({
      next: (response) => {
        console.log("Response from update API:", response);
      },
      error: (error) => {
        console.error("Error updating response type:", error);
      }
    });
  }

  done()
  {
    if(this.responses!=null){
      const obj: any[] = [];
      for(var i in this.responses){
        console.log("valuein i",i)
        console.log("responcedata",this.responses[i])

        const data={
          questionId:  parseInt(i, 10),
          response:this.responses[i]
        }
       obj.push(data);
      }
      this.service.addResponse(obj)
      .subscribe({
        next:(Response:any)=>
        {
          console.log(Response);
        }
      });
    }
   
    console.log(this.responses);

   
  }

  
  saveResponses() {
    const objects = [];
    for (let item of this.data) {
      const responseControl = this.responseForm.get(item.id);
      const object = {
        questionId: item.id,
        response: responseControl ? responseControl.value : null
      };
      objects.push(object);
    }
  
    this.service.addResponse(objects).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  


 
}
