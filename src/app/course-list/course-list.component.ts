import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CourseList from '../Database/CourseList';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  course: CourseList[] = [];
	id: string = '';
	name: string = '';

	addCourse(): void {
		this.course.push({
			id: this.id,
      name: this.name,
		});
    
		this.id = '';
		this.name = '';
	}
}
