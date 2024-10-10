import { Component } from '@angular/core';
import BuildingList from '../Database/BuildingList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuildingListService } from '../services/building-list/building-list.service';

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  	BuildingList=[] as BuildingList[];
	constructor(private buildingService: BuildingListService){
		this.BuildingList =
		this.buildingService.getBuild();
	}
	type: string = '';
	feature: string = '';
	purpose: string ='';

	addBuild(): void {
	  this.buildingService.addBuild(
      	this.type,
		this.feature,
		this.purpose,
		);
		
		this.type = '';
		this.feature = '';
		this.purpose = '';
	}
}
