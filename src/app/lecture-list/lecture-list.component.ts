import { Component } from '@angular/core';
import LectureList from '../Database/LectureList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LectureListService } from '../services/lecture-list/lecture-list.service';

@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  LectureList=[] as LectureList [];
  constructor (private lectureService: LectureListService)
  {this.LectureList=this.lectureService.getLecture();}

	title: string = '';
	lecturer: string = '';
  date: string = '';
  time: string = '';
  duration:string = '';
  location: string = '';

	addLectures(): void {
		this.lectureService.addLecture(
			this.title,
      this.lecturer,
			this.date,
      this.time,
      this.duration,
      this.location,
		);

    this.title = '';
		this.lecturer = '';
		this.date = '';
		this.time = '';
    this.duration = '';
    this.location = '';
}
}
