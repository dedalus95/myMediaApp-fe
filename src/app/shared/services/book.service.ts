import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Book } from '../interfaces/book';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient, private modalService: ModalService) {}

  getAllBooks() {
    return this.http.get<Book[]>(myMediaApp_url.book);
  }

  createBook() {}

  deleteBook() {}

  editBook() {}

  openBookForm() {
    this.modalService.showModal();
  }
}
