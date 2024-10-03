import { Component } from '@angular/core';
import ClassroomList from '../Database/ClassroomList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  Classroom: ClassroomList[] = [];
	section:  string ='';
  building: number = 0;
  teacher: string = '';
  grade: number = 0;

	addClassroom(): void {
		this.Classroom.push({
      section:this.section,
      building:this.building,
      teacher:this.teacher,
      grade:this.grade,
		});

		this.grade = 0;
		this.building = 0;
		this.section = '';
		this.teacher = '';
	}
}
