import { Injectable } from '@angular/core';
import StudentList from '../../Database/StudentList';
@Injectable({
  providedIn: 'root'
})
export class StudentListService {
private student: StudentList[]=[];

    addStudent(id: string, name: string, grade: string, age: number):void
    {this.student.push({
      id:id,
      name:name,
      grade:grade,
      age:age
    });
}
    getStudent():StudentList[]{
      return this.student;
    }
  constructor() { }
}
