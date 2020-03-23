import { Component, OnInit } from '@angular/core';
import { MycontentService, MyContent, Resource, Subject} from './mycontent.service';

@Component({
  selector: 'app-mycontent',
  templateUrl: './mycontent.component.html',
  styleUrls: ['./mycontent.component.css']
})
export class MycontentComponent implements OnInit {
  myContent: MyContent;
  likedSubjects: Subject[] = [];


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
          if(resource.subject.name == subject.name) {
            unique = false;
          }
        }
        if (unique) {
          this.likedSubjects.push({
            id: resource.subject.id,
            name: resource.subject.name
          });
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
