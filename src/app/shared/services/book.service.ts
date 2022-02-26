import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  addBook(book: Book) {
    this.http.post(myMediaApp_url.book, book);
  }

  getAllBooks() {
    return this.http.get<Book[]>(myMediaApp_url.book);
  }
}
