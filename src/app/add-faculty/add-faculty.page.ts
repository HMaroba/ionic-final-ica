import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  }

}
