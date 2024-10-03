import { Component } from '@angular/core';
import SoftwareList from '../Database/SoftwareList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  software: SoftwareList[] = [];
	
	name: string = '';
	type: string = '';
	price: number = 0;

	addSoftware(): void {
		this.software.push({
			name: this.name,
			type: this.type,
			price: this.price,
		});

		this.price = 0;
		this.type = '';
		this.name = '';
	}
}
