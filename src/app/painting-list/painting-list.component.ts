import { Component } from '@angular/core';
import PaintingList from '../Database/PaintingList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painting-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  painting: PaintingList[] = [];
	title: string = '';
	style: string = '';

	addArt(): void {
		this.painting.push({
			title: this.title,
			style: this.style,
		});

		this.title = '';
		this.style = '';
	}
}
