import { Component } from '@angular/core';
import DevToolList from '../Database/DevToolList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevelopersToolListService } from '../services/developers-tool-list/developers-tool-list.service';

@Component({
  selector: 'app-developers-tool-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './developers-tool-list.component.html',
  styleUrl: './developers-tool-list.component.css'
})
export class DevelopersToolListComponent {
  	DevToolList=[] as DevToolList [];
	constructor (private devtoolService: DevelopersToolListService){
		this.DevToolList=this.devtoolService.getDevTool();
	}
	name: string = '';
	type: string = '';
	purpose: string = '';
  

	addDevtool(): void {
		this.devtoolService.addDevTool(
			this.name,
			this.type,
			this.purpose,
		);

		this.purpose = '';
		this.type = '';
		this.name = '';
	}
}
