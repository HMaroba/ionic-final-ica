import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Faculty from '../Models/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private ngFirestore: AngularFirestore,
    private router : Router,) { }

    addFaculty(faculty: Faculty){
      return this.ngFirestore.collection('Faculties').add(faculty);
    }
    getFaculties(){
      return this.ngFirestore.collection('Faculties').snapshotChanges();
    }
    getFaculty(id: any){
      return this.ngFirestore.collection('Faculties').doc(id).valueChanges()
    }
    updateFaculty(id: string, faculty: Faculty){
      this.ngFirestore.collection('Faculties').doc(id).update(faculty)
      .then(() => {
        this.router.navigate(['/']);

      }).catch(error => console.log(error));
    }
    deleteFaculty(id : string){
      this.ngFirestore.doc('Faculties/' +id).delete();
    }
}
