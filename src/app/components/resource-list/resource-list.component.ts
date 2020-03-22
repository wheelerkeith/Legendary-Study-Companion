import { Component, OnInit } from '@angular/core';
import { Resource, ResourceService, httpOptions } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  private resources: Resource[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.populateResources();
  }

  populateResources() {
    this.resourceService.getSearchedResources("Java").subscribe((data: Resource[]) => {
      this.resources = data;
    })
  }

}
