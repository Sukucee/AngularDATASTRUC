import { Component } from '@angular/core';
import MobileAppList from '../Database/MobileAppList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-app-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
app: MobileAppList[] = [];
	title: string = '';
  genre: string = '';
  rating: number = 0;

	addLappyspc(): void {
		this.app.push({
      title:this.title,
			genre: this.genre,
      rating: this.rating,
		});

		this.title = '';
		this.genre = '';
    this.rating = 0;
}
}
