import { Component } from '@angular/core';
import FrameworkList from '../Database/FrameworkList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrameworkListService } from '../services/framework-list/framework-list.service';

@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  	FrameworkList=[] as FrameworkList [];
	constructor(private frameworkService: FrameworkListService)
	{this.FrameworkList=this.frameworkService.getFramework();}

	name: string = '';
	type: string = '';
	purpose: string = '';
  

	addItem(): void {
		this.frameworkService.addFramework(
			this.name,
			this.type,
			this.purpose,
		);

		this.purpose = '';
		this.type = '';
		this.name = '';
	}
}
