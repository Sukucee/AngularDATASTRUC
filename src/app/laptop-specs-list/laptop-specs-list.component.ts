import { Component } from '@angular/core';
import LaptopSpecList from '../Database/LaptopSpecList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaptopSpecsListService } from '../services/laptop-specs-list/laptop-specs-list.service';

@Component({
  selector: 'app-laptop-specs-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './laptop-specs-list.component.html',
  styleUrl: './laptop-specs-list.component.css'
})
export class LaptopSpecsListComponent {
  LaptopSpecList=[] as LaptopSpecList[];
  constructor (private laptopSpecService:LaptopSpecsListService)
  {this.LaptopSpecList=this.laptopSpecService.getLaptopSpecs();}

	model: string = '';
  processor: string = '';
  memory: string = '';

	addLappyspc(): void {
		this.laptopSpecService.addLaptopSpecs(
			this.model,
      this.processor,
      this.memory,
		);

		this.model = '';
		this.processor = '';
    this.memory = '';

}
}
