import { Component } from '@angular/core';
import BookList from '../Database/BookList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListService } from '../services/book-list/book-list.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  	BookList = [] as BookList[];
	constructor(private bookService: BookListService){
		this.BookList = this.bookService.getBook();
	}
	id: string = '';
	title: string = '';
	author: string = '';
  	genre: string = '';
	quantity: number = 0;

	addBooks(): void {
		this.bookService.addBook(
			this.id,
			this.title,
			this.author,
      		this.genre,
			this.quantity,
		);

		this.quantity = 0;
		this.genre = '';
		this.id = '';
		this.title = '';
    	this.author = '';
}
}
