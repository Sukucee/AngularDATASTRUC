import { Component } from '@angular/core';
import PresentationList from '../Database/PresentationList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  ppt: PresentationList[] = [];
	title: string = '';
  content: string = '';
  presenter: string = '';

	addNaThis(): void {
		this.ppt.push({
			title:this.title,
      content:this.content,
      presenter:this.presenter,
		});
    this.title = '';
		this.content = '';
    this.presenter = '';
	}
}
