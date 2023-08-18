import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
  private baseUrl = 'http://localhost:3000'; // Your server's base URL

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any[]> {
    const url = `${this.baseUrl}/students`;
    return this.http.get<any[]>(url);
  }

  addStudent(studentData: any): Observable<any> {
    const url = `${this.baseUrl}/students`;
    return this.http.post(url, studentData);
  }

  getStudent(studentId: string): Observable<any> {
    // Implementation for getting a specific student by ID
    const url = `${this.baseUrl}/students/${studentId}`;
    return this.http.get(url);
  }

  updateStudent(id: string, studentData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/${id}`, studentData);
  }

  deleteStudent(studentId: string): Observable<any> {
    const url= `${this.baseUrl}/students/${studentId}`;
    return this.http.delete(url);
  }
}
