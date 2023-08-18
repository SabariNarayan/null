import { Component, OnInit } from '@angular/core';
import { StudentdataService } from 'src/app/services/studentdata.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [LinkService]
})
export class ListComponent implements OnInit {

  currentUser : any;
  isEditButton= false;

  students: any[] = [];

  constructor(private studentDataService: StudentdataService, private linkService:LinkService) {}

  ngOnInit(): void {
    this.loadStudents();
    this.currentUser = this.linkService.getUserRole();
    console.log('user:'+this.currentUser);
    this.displayOptions();
  }

  displayOptions() {
    if (this.currentUser==='admin'){
      this.isEditButton = true
    } else {
      this.isEditButton=false
    }
  }

  loadStudents(): void {
    this.studentDataService.getAllStudents().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }

  deleteStudent(studentId: string): void {
    this.studentDataService.deleteStudent(studentId).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.loadStudents(); // Reload students after deletion
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }

 
}

  

