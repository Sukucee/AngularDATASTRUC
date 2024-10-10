import { Component } from '@angular/core';
import PaintingList from '../Database/PaintingList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaintingListService } from '../services/painting-list/painting-list.service';

@Component({
  selector: 'app-painting-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  painting = [] as PaintingList [];
  constructor (private paintingService: PaintingListService)
  {this.painting=this.paintingService.getPainting();}

	title: string = '';
	style: string = '';

	addArt(): void {
		this.paintingService.addPainting(
			this.title,
			this.style,
		);

		this.title = '';
		this.style = '';
	}
}
