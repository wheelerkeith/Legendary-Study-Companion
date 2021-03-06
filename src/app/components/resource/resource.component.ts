import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { Resource, ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  @Input() resource: Resource;

  icon: any;

  constructor(private resourceService: ResourceService) { 
  }
  
  ngOnInit(): void {
    this.icon = solidStar;
  }

  saveResource() {
    this.resourceService.postSavedResource(this.resource)
      .subscribe((data)=>{
        this.resource.saved = true;
        this.resource.likeCount++;
      });
  }

  unsaveResource() {
    this.resourceService.deleteSavedResource(this.resource)
      .subscribe((data)=>{
        this.resource.saved = false;
        this.resource.likeCount--;
      });
  }

  flagResource() {
    //TODO: Send resource to backend to add to blacklist table
    //TODO: Change button to show that resource has been flagged
    //  Maybe prompt user before flagging? Like "Are you sure you want to flag this resource? Y/N"
  }

}
