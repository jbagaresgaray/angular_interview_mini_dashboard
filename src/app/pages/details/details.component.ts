import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as bookSlice from 'src/app/stores/bookSlice';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  unsubscribe$ = new Subject<any>();
  book: any = {};

  constructor(
    private readonly store: Store<{}>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = params['id'];
      this.initBook(id);
    });
  }

  private initBook(id: string) {
    this.store
      .select(bookSlice.booksSelectors.formattedBooks)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => {
        console.log('state: ', state);
        const result = state.find(
          (item: bookSlice.FormattedBooks) => item.id === id
        );
        if (result) {
          this.book = result;
        }
        console.log('this.book: ', this.book);
      });
  }
}
