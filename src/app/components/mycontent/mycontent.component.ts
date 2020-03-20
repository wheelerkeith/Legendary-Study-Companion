import { Component, OnInit } from '@angular/core';
import { MycontentService, MyContent, StudySet, Resource } from './mycontent.service';

@Component({
  selector: 'app-mycontent',
  templateUrl: './mycontent.component.html',
  styleUrls: ['./mycontent.component.css']
})
export class MycontentComponent implements OnInit {
  myContent: MyContent;


  constructor(private myContentService: MycontentService) { }

  ngOnInit(): void {
    this.populateMyContent();
  }

  populateMyContent() {
    console.log("inside populateMyContent");
    this.myContentService.getMyContent().subscribe((data: MyContent) => {
      this.myContent = {
        userId: data["userId"],
        studySets: data["studySets"],
        likedResources: data["likedResources"]
    }});
  }

}
