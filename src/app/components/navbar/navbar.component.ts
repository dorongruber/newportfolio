import { Component, OnInit } from '@angular/core';
import { Icon } from 'src/app/models/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  iconsList = ['home', 'account_circle', 'work', 'list', 'card_travel', 'mail'];
  colors = ['#324147', '#324147', '#324147', '#324147', '#324147', '#324147'];
  icons: Icon[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0 ; i < this.iconsList.length; i++ ) {
      this.icons.push({
        Name: this.iconsList[i],
        Color: this.colors[i]
      });
    }
  }

}
