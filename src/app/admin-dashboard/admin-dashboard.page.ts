import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../Services/faculty.service';
import Faculty from '../Models/faculty';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  faculties!: Faculty[];

  constructor(public facultyServices: FacultyService) { }

  ngOnInit() {
    this.facultyServices.getFaculties().subscribe((res) => {
      this.faculties = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Faculty),
        };
    });
  })

}
}
