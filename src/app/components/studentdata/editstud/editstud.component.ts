import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentdataService } from 'src/app/services/studentdata.service';

@Component({
  selector: 'app-editstud',
  templateUrl: './editstud.component.html',
  styleUrls: ['./editstud.component.css']
})
export class EditstudComponent implements OnInit {
  studentId: string = '';
  student: any = {};

  constructor(
    private studentDataService: StudentdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = params['id']; // Get student ID from route params
      this.loadStudent(); // Load student data for editing
    });
  }

  loadStudent(): void {
    this.studentDataService.getStudent(this.studentId).subscribe(
      (student) => {
        this.student = student;
      },
      (error) => {
        console.error('Error loading student:', error);
      }
    );
  }
  

  updateStudent(): void {
    this.studentDataService.updateStudent(this.studentId, this.student).subscribe(
      () => {
        console.log('Student updated successfully');
        this.router.navigate(['/list']); // Redirect to student list after update
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
  }
}
