import { Component } from '@angular/core';
import MobileAppList from '../Database/MobileAppList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileAppListService } from '../services/mobile-app-list/mobile-app-list.service';

@Component({
  selector: 'app-mobile-app-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
app =[] as MobileAppList [];
constructor (private mobileappService:MobileAppListService)
{this.app=this.mobileappService.getMobileApp();}
	title: string = '';
  genre: string = '';
  rating: number = 0;

	addLappyspc(): void {
		this.mobileappService.addMobileApp(
      this.title,
			this.genre,
      this.rating,
		);

		this.title = '';
		this.genre = '';
    this.rating = 0;
}
}
