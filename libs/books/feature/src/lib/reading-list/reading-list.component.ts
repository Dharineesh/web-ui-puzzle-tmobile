import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, markeAsFinished } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

  constructor(private store: Store) {
    this.store.select(getReadingList).subscribe((list) => {
      this.readingList$ = JSON.parse(JSON.stringify(list));
      this.readingList$.forEach(element => {
        if (element.finishedDate) {
          element.formattedFinishedDate = new Date(element.finishedDate).toLocaleDateString("en-US", this.options);
        }
      });
      console.log(this.readingList$);
    });
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markasFinished(item) {
    if (item.finished) {
      console.log(item);
      item.finishedDate = new Date().toISOString();
      this.store.dispatch(markeAsFinished({ item }));
    } else {
      item.finishedDate = null;
      item.formattedFinishedDate = null;
      this.store.dispatch(markeAsFinished({ item }));
    }
  }
}
