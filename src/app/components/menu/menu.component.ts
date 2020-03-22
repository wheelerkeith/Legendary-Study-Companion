import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tokenArray: any[];

  constructor() { }

  ngOnInit(): void {
    // this I am not sure will work. Will need to test once we have the loginpage set to block use.
    if(sessionStorage) {
      this.tokenArray = sessionStorage.token.split(':',2);
    }
  }

}
