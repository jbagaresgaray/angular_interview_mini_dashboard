import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

import { BaseService } from 'src/app/services/base.service';
import * as bookSlice from 'src/app/stores/bookSlice';
import { compare } from 'src/app/utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  showFiller = false;
  displayedColumns: string[] = ['image', 'name', 'type', 'created_at'];
  booksArr: bookSlice.FormattedBooks[] = [];
  booksArrCopy: bookSlice.FormattedBooks[] = [];

  unsubscribe$ = new Subject<any>();

  constructor(
    private router: Router,
    private baseService: BaseService,
    private readonly store: Store<{}>
  ) {}

  ngOnInit(): void {
    this.init();

    this.store
      .select(bookSlice.booksSelectors.books)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => {
        console.log('state: ', state);
        if (state) {
          const booksArr = state.map((item: any) => {
            return {
              id: item.id,
              name: item.attributes.content,
              image: item.attributes.display_properties.image,
              type: item.attributes.display_properties.type,
              created_at: moment(new Date(item.attributes.created_at))
                .format('MMMM DD, YYYY')
                .toString(),
              link: item.links.self,
            };
          });
          this.booksArr = booksArr;
          this.booksArrCopy = booksArr;
          this.store.dispatch<any>(bookSlice.populateFormattedBooks(booksArr));
        }
        console.log('this.booksArr: ', this.booksArr);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private async init() {
    const data = await this.baseService.getJSON();
    this.store.dispatch<any>(bookSlice.populateBooks(data.data));
  }

  sortData(sort: Sort) {
    const data = this.booksArr.slice();
    if (!sort.active || sort.direction === '') {
      this.booksArr = data;
      return;
    }

    this.booksArr = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'created_at':
          return compare(a.created_at, b.created_at, isAsc);
        default:
          return 0;
      }
    });
  }

  filterData(event: any) {
    const data = event.target.value;
    console.log('data: ', data.toLowerCase());
    if (data) {
      this.booksArr = this.booksArrCopy.filter(
        (item: any) =>
          item.name.toLowerCase().indexOf(data.toLowerCase()) !== -1
      );
      console.log('booksArr: ', this.booksArr);
    } else {
      this.booksArr = [...this.booksArrCopy];
    }
  }

  openBook(book: bookSlice.FormattedBooks) {
    this.router.navigate(['/details'], {
      queryParams: {
        id: book.id,
      },
    });
  }
}
