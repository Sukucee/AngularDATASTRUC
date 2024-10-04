import { Component } from '@angular/core';
import FrameworkList from '../Database/FrameworkList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  Framework: FrameworkList[] = [];
	name: string = '';
	type: string = '';
	purpose: string = '';
  

	addItem(): void {
		this.Framework.push({
			name: this.name,
			type: this.type,
			purpose: this.purpose,
		});

		this.purpose = '';
		this.type = '';
		this.name = '';
	}
}
