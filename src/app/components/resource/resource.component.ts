import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  resource_link: String;
  resource_name: String;
  liked: Boolean = false;
  like_count: Number = 0;

  icon: any;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.resource_name = "Test Resource";
    this.icon = this.liked ? solidStar : faStar;
  }

  likeResource(): void {

    //TODO: Backend implementation for liking a resource

    this.liked = !this.liked;
    if (this.liked) {
      this.icon = solidStar;
    } else {
      this.icon = faStar;
    }

  }

  likeEnter(): void {
    this.icon = solidStar;
  }

  likeLeave(): void {
    if (!this.liked)
      this.icon = faStar;
  }

}
