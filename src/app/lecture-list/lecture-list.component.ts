import { Component } from '@angular/core';
import LectureList from '../Database/LectureList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectures: LectureList[] = [];
	title: string = '';
	lecturer: string = '';
  date: string = '';
  time: string = '';
  duration:string = '';
  location: string = '';

	addLectures(): void {
		this.lectures.push({
			title: this.title,
      lecturer: this.lecturer,
			date: this.date,
      time: this.time,
      duration: this.duration,
      location: this.location,
		});

    this.title = '';
		this.lecturer = '';
		this.date = '';
		this.time = '';
    this.duration = '';
    this.location = '';
}
}
