import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  sources: any = [{
      name: "Wikipedia",
      checked: true
    }, {
      name: "Google Books",
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

  constructor(private router: Router, private rout: ActivatedRoute, private resourceService: ResourceService ) { }

  ngOnInit(): void {
    this.rout.queryParamMap.subscribe(d=>{
      var filters = d.get("filters")
      if (filters) {

        for(let s of this.sources) {
          s.checked = false;
        }

        var filtersArr = filters.split(":");

        for(let f of filtersArr) {
          var s = this.sources.filter(o=>o.name == f)[0];
          if (s) {s.checked = true;}
        }
      }
    });
  }

  filterSearch(target) {

    target.checked = !target.checked;

    var filteredSources = this.sources.filter(src=>src.checked);

    this.rout.queryParamMap.subscribe(d=>{
      
      var paramString = "";

      for(let src of filteredSources) {
        paramString += src.name + ":"
      }

      paramString = paramString.slice(0, -1);

      this.router.navigate(["app/search"], {queryParams: {q: d.get("q"), filters: paramString} })

      var subscription = this.resourceService.getSearchedResources(d.get("q"), paramString).subscribe(data=>{
        this.resourceService.resources = data;
        subscription.unsubscribe();
      });

    });

  }

}
