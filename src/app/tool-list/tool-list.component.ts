import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ToolList from '../Database/ToolList';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: ToolList[] = [];
	id: string = '';
	name: string = '';
  type: string = '';
	price: number = 0;

	addItems(): void {
		this.tools.push({
			id: this.id,
			name: this.name,
      type: this.type,
			price: this.price,
		});

		this.price = 0;
		this.type = '';
		this.id = '';
		this.name = '';
}
}
