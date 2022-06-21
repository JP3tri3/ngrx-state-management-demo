import { TestBed } from '@angular/core/testing';

import { BookListService } from './books.service';

describe('BookListService', () => {
  let service: BookListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
