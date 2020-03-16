import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  sources: Object = [{
      name: "Wikipedia",
      checked: true
    }, {
      name: "Youtube",
      checked: true
    }, {
      name: "Google Books",
      checked: true
    }, {
      name: "KhanAcademy",
      checked: true
  }]

  con_types: Object = [{
      name: "Article",
      checked: true
    }, {
      name: "Video",
      checked: true
    }, {
      name: "Book",
      checked: true
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
