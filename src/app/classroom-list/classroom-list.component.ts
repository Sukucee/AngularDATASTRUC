import { Component } from '@angular/core';
import ClassroomList from '../Database/ClassroomList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassroomListService } from '../services/classroom-list/classroom-list.service';

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  ClassroomList=[] as ClassroomList[];
  constructor(private classroomService:
    ClassroomListService){
      this.ClassroomList=this.classroomService.getClassroom();
    }
	section:  string ='';
  building: number = 0;
  teacher: string = '';
  grade: number = 0;

	addClassroom(): void {
		this.classroomService.addClassroom(
      this.section,
      this.building,
      this.teacher,
      this.grade,
		);

		this.grade = 0;
		this.building = 0;
		this.section = '';
		this.teacher = '';
	}
}
