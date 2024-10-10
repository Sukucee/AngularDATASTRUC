import { Component } from '@angular/core';
import PresentationList from '../Database/PresentationList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresentationListService } from '../services/presentation-list/presentation-list.service';

@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  ppt =[] as PresentationList[];
  constructor(private presentationService:PresentationListService)
  {this.ppt=presentationService.getPresentation();}

	title: string = '';
  content: string = '';
  presenter: string = '';

	addNaThis(): void {
		this.presentationService.addPresentation(
			this.title,
      this.content,
      this.presenter,
		);
    this.title = '';
		this.content = '';
    this.presenter = '';
	}
}
