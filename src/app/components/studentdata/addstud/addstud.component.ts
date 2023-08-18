import { Component } from '@angular/core';
import { StudentdataService } from 'src/app/services/studentdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent {
  name: string = '';
  age: number | null = null;
  score: number | null = null;

  constructor(private studentDataService: StudentdataService , private router:Router) {}

  addStudent(): void {
    if (this.name && this.age !== null && this.score !== null) {
      const newStudent = {
        name: this.name,
        age: this.age,
        score: this.score
      };

      this.studentDataService.addStudent(newStudent).subscribe(
        () => {
          console.log('Student added successfully');
          // Clear input fields
          this.name = '';
          this.age = null;
          this.score = null;
          // Reload students after adding
          this.router.navigate(['/list']);
        },
        (error) => {
          console.error('Error adding student:', error);
        }
      );
    } else {
      console.log('Invalid input. Please provide valid values for name, age, and score.');
      alert('Invalid input. Please provide valid values for name, age, and score.');
    }
  }
}
