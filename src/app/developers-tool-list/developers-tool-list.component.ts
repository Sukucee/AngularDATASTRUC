import { Component } from '@angular/core';
import DevToolList from '../Database/DevToolList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-developers-tool-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './developers-tool-list.component.html',
  styleUrl: './developers-tool-list.component.css'
})
export class DevelopersToolListComponent {
  DevTool: DevToolList[] = [];
	name: string = '';
	type: string = '';
	purpose: string = '';
  

	addDevtool(): void {
		this.DevTool.push({
			name: this.name,
			type: this.type,
			purpose: this.purpose,
		});

		this.purpose = '';
		this.type = '';
		this.name = '';
	}
}
