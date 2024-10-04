import { Component } from '@angular/core';
import LibraryList from '../Database/LibraryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  Library: LibraryList[] = [];
	  name: string = '';
    language: string = '' ;
    purpose: string = '';
    function: string = '';

	addLibrary(): void {
		this.Library.push({
			name: this.name,
      language: this.language,
      purpose:this.purpose,
      function:this.function,
		});

		this.name = '';
    this.language = '';
    this.purpose = '';
    this.function = '';
		
}
}
