import { Component } from '@angular/core';
import BuildingList from '../Database/BuildingList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  Building: BuildingList[] = [];
	type: string = '';
	feature: string = '';
	purpose: string ='';

	addBuild(): void {
		this.Building.push({
      type: this.type,
			feature: this.feature,
			purpose: this.purpose,
		});
		this.type = '';
		this.feature = '';
		this.purpose = '';
	}
}
