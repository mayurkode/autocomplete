import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent implements OnInit {



  results: Object;
  searchTerm$ = new Subject<string>();


  ngOnInit() {
  }

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  select(item) {

    console.log(item);

  }
}
