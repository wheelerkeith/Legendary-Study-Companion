import { Component, OnInit } from '@angular/core';
import { MycontentService, MyContent, Resource } from './mycontent.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mycontent',
  templateUrl: './mycontent.component.html',
  styleUrls: ['./mycontent.component.css']
})
export class MycontentComponent implements OnInit {
  myContent: MyContent;
  likedSubjects: string[] = [];


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
        likedResources: data["resourceList"]
      }

      let count = 0;
      let unique = true;

      for(let resource of this.myContent.likedResources) {
        for(let subject of this.likedSubjects) {
          if(resource.subject.name == subject) {
            unique = false;
          }
        }
        if (unique) {
          this.likedSubjects[count] = resource.subject.name;
          count ++;
        }
        unique = true;
      }

    });
  }

  matchSubject(name: string): Resource[] {
    let subArray: Resource[] = [];

    for(let resource of this.myContent.likedResources){
      if(name == resource.subject.name) {
        subArray.push(resource);
      }
    }
    return subArray;
  }

}
