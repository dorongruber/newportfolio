import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  iconsList = ['home', 'account_circle','work', 'list', 'card_travel', 'mail'];
  icons: Icon[] = [];
  constructor() {
    for (let i = 0 ; i < this.iconsList.length; i++ ) {
      this.icons.push({
        Name: this.iconsList[i],
        Color: '#324147'
      });
    }
   }

  ngOnInit(): void {

  }

}
