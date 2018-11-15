import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search/search.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {


  constructor(private search: SearchService) {
  }

  ngOnInit() {
  }

  doSearch(val) {
    this.search.filter$.next(val);
  }

}
