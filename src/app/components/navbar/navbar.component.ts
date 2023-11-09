import { Component, OnInit } from '@angular/core';
import { icons } from 'src/app/consts/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  icons = icons;
  constructor() {}

  ngOnInit(): void {

  }

}
