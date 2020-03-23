import { Component, OnInit, Input } from '@angular/core';
import { Resource, ResourceService, httpOptions } from 'src/app/services/resource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  resources: Resource[];

  resourceService1: ResourceService;

  constructor(private resourceService: ResourceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.populateResources();
  }

  populateResources() {
    this.route.queryParamMap.subscribe(params=> {
      var subscription = this.resourceService1.getSearchedResources(params.get("q"), params.get("filters")).subscribe((data: Resource[]) => {
        this.resourceService1.resources = data;
        subscription.unsubscribe();
      })
    }
    )
  }

}
