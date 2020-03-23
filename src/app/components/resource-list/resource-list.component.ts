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

  constructor(private resourceService: ResourceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.populateResources();
  }

  populateResources() {
    this.route.queryParamMap.subscribe(params=> {
      this.resourceService.getSearchedResources(params.get("q")).subscribe((data: Resource[]) => {
        this.resources = data;
      })
    }
    )
  }

}
