import { Component } from '@angular/core';
import ComputerHardwareList from '../Database/ComputerHardwareList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComputerHardwareListService } from '../services/computer-hardware-list/computer-hardware-list.service';

@Component({
  selector: 'app-computer-hardware-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  	ComputerHardwareList=[] as ComputerHardwareList [];
	constructor(private computerHardwareService: ComputerHardwareListService){
		this.ComputerHardwareList=this.computerHardwareService.getComputer();
	}
	hardware: string = '';
	brand: string = '';
	price: number = 0;

	addCHL(): void {
		this.computerHardwareService.addComputer(
     		this.hardware,
			this.brand,
			this.price,
		);

		this.price = 0;
		this.brand = '';
		this.hardware = '';
	}
}
