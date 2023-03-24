import { Component, OnInit } from '@angular/core';
import Notifications from '../Models/Notifications';
import { NotificationsService } from '../Services/notifications.service';

@Component({
  selector: 'app-faculty-notifications',
  templateUrl: './faculty-notifications.page.html',
  styleUrls: ['./faculty-notifications.page.scss'],
})
export class FacultyNotificationsPage implements OnInit {

  notifications!: Notifications[];

  constructor(public notificationService: NotificationsService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((res) => {
      this.notifications = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Notifications),
        };
      });
    });
  }
}
