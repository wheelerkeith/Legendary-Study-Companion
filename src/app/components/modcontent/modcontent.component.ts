import { Component, OnInit } from '@angular/core';
import { BlacklistService, Blacklist } from './blacklist.service';

@Component({
  selector: 'app-modcontent',
  templateUrl: './modcontent.component.html',
  styleUrls: ['./modcontent.component.css']
})
export class ModcontentComponent implements OnInit {
  blacklists: Blacklist[];

  constructor(private blacklistService: BlacklistService) { }

  ngOnInit(): void {
    this.populateBlacklistCard();
  }

  populateBlacklistCard() {
    console.log("inside populateBlacklistCard");
    this.blacklistService.getAllBlacklists().subscribe(blacklists => (this.blacklists = blacklists));
  }

  updateStatus(resourceId: any, subjectId: any, newStatus: string){
    console.log(resourceId + ' ' + subjectId + ' ' + newStatus);
    let newString: string = resourceId + `&` + subjectId + `:` + newStatus;
    this.blacklistService.putUpdateStatus(newString).subscribe();

    // https://indepth.dev/here-is-why-appendchild-moves-a-dom-node-between-parents/
    let updatedDiv = document.getElementById(`blacklist-div-${resourceId}-${subjectId}`);
    let parentUl = document.getElementById("processed-blacklist-ul-element");
    parentUl.appendChild(updatedDiv);
    
  }

}
