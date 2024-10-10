import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CourseList from '../Database/CourseList';
import { CourseListService } from '../services/course-list/course-list.service';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
    CourseList=[] as CourseList [];
	constructor(private courseService: CourseListService){
		this.CourseList=this.courseService.getCourse();
	}
	id: string = '';
	name: string = '';

	addCourse(): void {
		this.courseService.addCourse(
		this.id,
        this.name,
		);
    
		this.id = '';
		this.name = '';
	}
}
