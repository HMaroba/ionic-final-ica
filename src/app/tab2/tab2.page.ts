import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from '../Services/notifications.service';
import Notifications from '../Models/Notifications';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  notiform! : FormGroup;
  isSubmitted = false;
  notifications! : Notifications[];
   dateTime: any;

  constructor(
    public formBuilder : FormBuilder,
    public notificationService: NotificationsService,
    public router : Router,
  ) { }

  get errorControl(){
    return this.notiform.controls;
  }

ngOnInit() {

  setTimeout(() => {
    this.dateTime = new Date().toISOString();
  })

  this.notiform = this.formBuilder.group({
    message : ['', Validators.required],
    date : ['', Validators.required],
    DateTime : this.dateTime,
  })
  this.notificationService.getNotifications().subscribe((res) => {
    this.notifications = res.map((t) => {
      return {
        id: t.payload.doc.id,
        ...(t.payload.doc.data() as Notifications),
      };
    });
  });
}

  submitForm(){
    this.isSubmitted= true;
    if(this.notiform.valid){
      this.notificationService.sendNotofication(this.notiform.value).then((res: any) => {
        this.router.navigate(['/tabs/tab2']);
        window.alert('Notification Successfully send');
        this.notiform.reset();
      })
        .catch((error: any) => window.alert(error));
    }
  }
  deleteNotification(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this message ? ')) {
      this.notificationService.deleteNotification(id);
    }
  }

}

