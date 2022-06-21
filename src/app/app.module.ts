import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { booksReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
