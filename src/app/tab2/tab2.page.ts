import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../Services/notifications.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  rstform! : FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder : FormBuilder,
    public notificationService: NotificationsService,
    public router : Router,
  ) { }

  get errorControl(){
    return this.rstform.controls;
  }

ngOnInit() {
  this.rstform = this.formBuilder.group({
    message : ['', Validators.required],
    date : ['', Validators.required]
  })
}

  submitForm(){
    this.isSubmitted= true;
    if(this.rstform.valid){
      this.notificationService.sendNotofication(this.rstform.value).then((res: any) => {
        this.router.navigate(['/tabs/tab2']);
      })
        .catch((error: any) => console.log(error));
    }
  }

}

