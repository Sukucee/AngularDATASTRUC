import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import StudentList from '../Database/StudentList';
import { StudentListService } from '../services/student-list/student-list.service';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students = [] as StudentList [];
  constructor (private studentService: StudentListService)
  {this.students=this.studentService.getStudent();}
	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 7;

	addStudent(): void {
		this.studentService.addStudent(
			this.id,
			this.name,
			this.grade,
			this.age,
		);

		this.age = 7;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}
