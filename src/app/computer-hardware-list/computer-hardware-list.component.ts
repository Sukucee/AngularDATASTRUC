import { Component } from '@angular/core';
import ComputerHardwareList from '../Database/ComputerHardwareList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computer-hardware-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  component: ComputerHardwareList[] = [];
	hardware: string = '';
	brand: string = '';
	price: number = 0;

	addCHL(): void {
		this.component.push({
      hardware: this.hardware,
			brand: this.brand,
			price: this.price,
		});

		this.price = 0;
		this.brand = '';
		this.hardware = '';
	}
}
