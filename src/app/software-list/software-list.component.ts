import { Component } from '@angular/core';
import SoftwareList from '../Database/SoftwareList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoftwareListService } from '../services/software-list/software-list.service';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  software=[] as SoftwareList [];
  constructor(private softwareService: SoftwareListService)
  {this.software=this.softwareService.getSoftware();}
	
	name: string = '';
	type: string = '';
	price: number = 0;

	addSoftware(): void {
		this.softwareService.addSoftware(
			this.name,
			this.type,
			this.price,
		);

		this.price = 0;
		this.type = '';
		this.name = '';
	}
}
