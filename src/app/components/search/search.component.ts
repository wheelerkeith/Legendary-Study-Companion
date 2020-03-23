import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResourceService } from 'src/app/services/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: String = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['app/search'], {queryParams: {q: this.searchQuery} } )
  }

}
