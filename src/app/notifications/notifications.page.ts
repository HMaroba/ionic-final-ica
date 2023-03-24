import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../Services/notifications.service';
import Notifications from '../Models/Notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
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

  deleteNotification(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this message ? ')) {
      this.notificationService.deleteNotification(id);
    }
  }
}
