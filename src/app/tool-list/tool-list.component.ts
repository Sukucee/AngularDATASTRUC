import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ToolList from '../Database/ToolList';
import { ToolListService } from '../services/tool-list/tool-list.service';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools=[] as ToolList [];
  constructor (private toolService: ToolListService)
  {this.tools=this.toolService.getTool();}

	id: string = '';
	name: string = '';
 	type: string = '';
	price: number = 0;

	addItems(): void {
		this.toolService.addTool(
			this.id,
			this.name,
      		this.type,
			this.price,
		);

		this.price = 0;
		this.type = '';
		this.id = '';
		this.name = '';
}
}
