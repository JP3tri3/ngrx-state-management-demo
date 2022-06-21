import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectBookCollection,
  selectBooks,
} from './state/books/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import { Observable } from 'rxjs';
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-state-management-demo';
  books$: Observable<readonly Book[]> | null = this.store.select(selectBooks);
  bookCollection$: Observable<readonly (Book | undefined)[]> =
    this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private store: Store, private booksService: GoogleBooksService) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
