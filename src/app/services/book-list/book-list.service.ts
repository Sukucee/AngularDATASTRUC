import { Injectable } from '@angular/core';
import BookList from '../../Database/BookList';
@Injectable({
  providedIn: 'root'
})
export class BookListService {
private books: BookList[]=[];

addBook(id: string ,title: string,author: string, genre: string, quantity: number): void {this.books.push({
id: id,
title: title,
author: author,
genre: genre,
quantity: quantity,
});
}
getBook():BookList[]{
  return this.books;
}
  constructor() { }
}
