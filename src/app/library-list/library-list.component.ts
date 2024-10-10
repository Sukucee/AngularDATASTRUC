import { Component } from '@angular/core';
import LibraryList from '../Database/LibraryList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryListService } from '../services/library-list/library-list.service';

@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
    LibraryList = [] as LibraryList [];
    constructor (private libraryService: LibraryListService)
    {this.LibraryList=this.libraryService.getLibrary();}

	  name: string = '';
    language: string = '' ;
    purpose: string = '';
    functions: string = '';

	addLibrary(): void {
		this.libraryService.addLibrary(
			this.name,
      this.language,
      this.purpose,
      this.functions,
		);

		this.name = '';
    this.language = '';
    this.purpose = '';
    this.functions = '';
		
}
}
