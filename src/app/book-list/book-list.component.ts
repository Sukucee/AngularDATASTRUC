import { Component } from '@angular/core';
import BookList from '../Database/BookList';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  book: BookList[] = [];
	id: string = '';
	title: string = '';
	author: string = '';
  genre: string = '';
	quantity: number = 0;

	addBooks(): void {
		this.book.push({
			id: this.id,
			title: this.title,
			author: this.author,
      genre: this.genre,
			quantity: this.quantity,
		});

		this.quantity = 0;
		this.genre = '';
		this.id = '';
		this.title = '';
    this.author = '';
}
}
