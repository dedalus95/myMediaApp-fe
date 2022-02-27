import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<Book[]>(myMediaApp_url.book);
  }

  createBook() {}

  deleteBook() {}

  editBook() {}

  openBookForm() {}
}
