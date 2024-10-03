import { Component } from '@angular/core';
import LaptopSpecList from '../Database/LaptopSpecList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-specs-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './laptop-specs-list.component.html',
  styleUrl: './laptop-specs-list.component.css'
})
export class LaptopSpecsListComponent {
  lappyspecs: LaptopSpecList[] = [];
	model: string = '';
  processor: string = '';
  memory: string = '';

	addLappyspc(): void {
		this.lappyspecs.push({
			model: this.model,
      processor: this.processor,
      memory:this.memory,
		});

		this.model = '';
		this.processor = '';
    this.memory = '';

}
}
