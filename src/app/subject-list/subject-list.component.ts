import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SubjectList from '../Database/SubjectList';
import { SubjectListService } from '../services/subject-list/subject-list.service';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subject = [] as SubjectList [];
  constructor (private subjectService: SubjectListService)
  {this.subject=this.subjectService.getSubject();}
	unit: number = 0;
	name: string = '';
  proctor: string = '';
  duration: string = '';
  

	addSubject(): void {
		this.subjectService.addSubject(
			this.unit,
      this.name,
      this.proctor,
      this.duration,
		);
    
		this.unit = 0;
		this.name = '';
    this.proctor = '';
    this.duration = '';
	}
}
