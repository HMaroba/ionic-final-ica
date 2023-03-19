import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../Services/faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.page.html',
  styleUrls: ['./add-faculty.page.scss'],
})
export class AddFacultyPage implements OnInit {

  rstform! : FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder : FormBuilder,
    public facultyService: FacultyService,
    public router : Router,
  ) { }

  get errorControl(){
    return this.rstform.controls;
  }

ngOnInit() {
  this.rstform = this.formBuilder.group({
    facultyName : ['', Validators.required],
  })
}

  submitForm(){
    this.isSubmitted= true;
    if(this.rstform.valid){
      this.facultyService.addFaculty(this.rstform.value).then((res: any) => {
        this.router.navigate(['/admin-dashboard']);
      })
        .catch((error: any) => console.log(error));
    }
  }

}
