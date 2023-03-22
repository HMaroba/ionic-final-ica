import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Notifications from '../Models/Notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private ngFirestore: AngularFirestore,
    private router : Router,) { }

    sendNotofication(noti: Notifications){
      return this.ngFirestore.collection('Notifications').add(noti);
    }
    getNotifications(){
      return this.ngFirestore.collection('Notifications').snapshotChanges();
    }
    getNotification(id: any){
      return this.ngFirestore.collection('Notifications').doc(id).valueChanges()
    }
    updateNotification(id: string, noti: Notifications){
      this.ngFirestore.collection('Notifications').doc(id).update(noti)
      .then(() => {
        this.router.navigate(['/tabs/tab2']);

      }).catch(error => console.log(error));
    }
    deleteNotification(id : string){
      this.ngFirestore.doc('Notifications/' +id).delete();
    }
}
