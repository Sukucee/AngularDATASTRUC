import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SubjectList from '../Database/SubjectList';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subject: SubjectList[] = [];
	unit: number = 0;
	name: string = '';
  proctor: string = '';
  duration: string = '';
  

	addSubject(): void {
		this.subject.push({
			unit:this.unit,
      name:this.name,
      proctor:this.proctor,
      duration:this.duration,
		});
    
		this.unit = 0;
		this.name = '';
    this.proctor = '';
    this.duration = '';
	}
}
